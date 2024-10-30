import React from "react";
import LoadingScreen from "./LoadingScreen";
import ProductModal from "./ProductModal";
import { getUniqueValue, getWeightSize } from "../../utils/productDetail"
import { useParams } from "react-router-dom";
import ContainerSlot from "../../components/ContainerSlot";
import { useWishContext } from "../../context/WishContaxtProvider";
import NextButt from "./NextButt";
import SelectionComponent from "./SelectionComponent";
import DescriptionComponent from "./DescriptionComponent";

function ProductDetail() {
  const { permalink } = useParams();
  const [finishLoading, setFinishLoading] = React.useState(false);
  // must have the productdetail object
  const [productdetail, setProductDetail] = React.useState({});
  // must have the selectedImage state
  const [selectedImage, setSelectedImage] = React.useState(0);
  // must have the isDiscount state
  const [isDiscount, setIsDiscount] = React.useState(0);
  // const [favorite, setFavorite] = React.useState(false);
  const [outofstock, setOutofstock] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const { toggle, wishList } = useWishContext();
  const favorite = wishList.includes(permalink) ?? false;

  // use getUniqueValue function to get the unique color, size, and colorCode from the productdetail.variants
  const [productChoice, setPoductChoice] = React.useState({
    color: [],
    colorCode: [],
    size: [],
  });

  const resetState = () => {
    setFinishLoading(false);
    setProductDetail({});
    setSelectedImage(0);
    setIsDiscount(0);
    // setFavorite(false);
    setOutofstock(false);
    setShowModal(false);
    setPoductChoice({
      color: [],
      colorCode: [],
      size: [],
    });
  };

  const [selectedProduct, setSelectedProduct] = React.useState({});

  React.useEffect(() => {
    resetState();
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.storefront.wdb.skooldio.dev/products/${permalink}` // must use the first permalink from the permalinks array
        );
        const data = await response.json();
        setProductDetail(data);
        setProductDetail((prev) => {
          return {
            ...prev,
            variants: prev.variants.sort(
              (a, b) => getWeightSize(a.size) - getWeightSize(b.size)
            ),
          };
        });
        setFinishLoading(true);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };
    fetchProduct();
  }, [permalink]);

  React.useEffect(() => {
    if (!finishLoading) return;

    setPoductChoice((prev) => {
      return {
        ...prev,
        color: getUniqueValue(productdetail.variants, "color"),
        colorCode: getUniqueValue(productdetail.variants, "colorCode"),
        size: getUniqueValue(productdetail.variants, "size"),
      };
    });
    setIsDiscount(
      productdetail.promotionalPrice < productdetail.price
        ? parseInt(
            (1 - productdetail.promotionalPrice / productdetail.price) * 100
          )
        : 0
    );
  }, [productdetail]);

  React.useEffect(() => {
    if (!finishLoading) return;

    setSelectedProduct({
      ...productdetail.variants[0],
      quantity: 1,
      name: productdetail.name,
      price: productdetail.promotionalPrice,
    });
  }, [productChoice]);

  React.useEffect(() => {
    if (finishLoading === false) return;
    if (selectedProduct.remains === 0) {
      setOutofstock(true);
    } else {
      setOutofstock(false);
    }
  }, [selectedProduct]);

  const setImageOutofstock = (outofstock) => {
    if (outofstock) {
      return "brightness-50";
    } else {
      return "";
    }
  };
  // console.log(productdetail);

  return (
    <>
      {/* Preview of product */}
      {finishLoading ? (
        <>
          <ProductModal
            showModal={showModal}
            selectedImage={productdetail.imageUrls[selectedImage]}
            selectedProduct={selectedProduct}
            setShowModal={setShowModal}
          />

          <section className=" px-4 pt-6  pb-24 flex flex-col items-center justify-center gap-10 select-none xl:flex-row xl:items-start xl:pt-16 xl:px-[124px] 2xl:px-[160px]">
            <div className="grid grid-cols-5 gap-y-4 gap-x-2 w-[21.4375rem] xl:w-[36rem] 2xl:w-[48.75rem]">
              <div className="w-full h-[21.4375rem] col-span-5 relative xl:h-[37.3125rem] 2xl:h-[48.75rem]">
                <img
                  src={productdetail.imageUrls[selectedImage]}
                  alt="product"
                  className={`object-cover object-top  w-full h-full ${setImageOutofstock(
                    outofstock
                  )}`}
                />
                {outofstock ? (
                  <div className="absolute flex justify-center items-center font-['Poppins'] top-[1.875rem] right-0 px-[7px] py-[3px] bg-secondary-900 text-secondary-50 text-[11px] xl:top-[83px] xl:text-[27px]  xl:h-[47px] xl:leading-8 2xl:top-[32px] 2xl:h-[57px] ">
                    Out of stock
                  </div>
                ) : isDiscount ? (
                  <div className="absolute flex justify-center items-center font-['Poppins'] top-[0.875rem] right-0 px-[7px] py-[3px] bg-danger text-secondary-50 xl:top-[83px] xl:text-[27px] xl:w-[86px] xl:h-[47px] xl:leading-8 2xl:top-[32px] 2xl:h-[57px] ">
                    -{isDiscount}%
                  </div>
                ) : (
                  ""
                )}
                <NextButt
                  direction={"left"}
                  onClick={() => {
                    setSelectedImage((prev) => {
                      if (prev === 0) {
                        return productdetail.imageUrls.length - 1;
                      }
                      return prev - 1;
                    });
                  }}
                />
                <NextButt
                  direction={"right"}
                  onClick={() => {
                    setSelectedImage((prev) => {
                      if (prev === productdetail.imageUrls.length - 1) {
                        return 0;
                      }
                      return prev + 1;
                    });
                  }}
                />
              </div>
              {productdetail.imageUrls.map((image, index) => {
                {
                  /* w-full h-[80px] col-span-1 bg-secondary-700 xl:h-[167px] 2xl:h-[172px] */
                }
                let style_image = `w-full h-[70px] col-span-1 bg-secondary-700 xl:h-[140px] 2xl:h-[150px] ${setImageOutofstock(
                  outofstock
                )} duration-200 cursor-pointer translate-y-0 hover:translate-y-[-5px]`;
                if (index == selectedImage) {
                  style_image += "  brightness-50";
                }
                return (
                  <div
                    key={index}
                    className={style_image}
                    onClick={() => {
                      setSelectedImage(index);
                    }}
                  >
                    <img
                      src={image}
                      alt="product"
                      className="object-cover object-top  w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
            {/* Detail of product */}
            <div className=" flex flex-col w-[21.4375rem] gap-10 xl:w-[36.0625rem] 2xl:w-[780px]">
              {/* Name, Description, Price, Star */}

              <DescriptionComponent
                productdetail={productdetail}
                isDiscount={isDiscount}
                outofstock={outofstock}
                favorite={favorite}
                setFavorite={async () => toggle(productdetail?.permalink)}
              />

              {/* Select Color, Size, Quantity */}
              <SelectionComponent
                productdetail={productdetail}
                productChoice={productChoice}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                outofstock={outofstock}
                setShowModal={setShowModal}
              />
            </div>
          </section>
          <div className="px-4 lg:px-16 2xl:px-32 pt-6 xl:pt-10 pb-16 lg:pb-20 flex flex-col gap-10 lg:gap-12 2xl:gap-20">
            <ContainerSlot containerLabel="people also like these" />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default ProductDetail;
