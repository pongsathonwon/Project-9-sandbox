import React from "react";
import ShowColorVariant from "./ShowColorVariant";
import Dropdown from "./Dropdown";

function SelectionComponent({
  productdetail,
  productChoice,
  selectedProduct,
  setSelectedProduct,
  outofstock,
  setShowModal,
}) {
  return (
    <>
      {/* Color, Size, Quantity */}
      <div className="flex flex-col gap-6">
        {/* Color Select*/}
        <div className="flex flex-col gap-2 ">
          <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
            Color
          </h5>
          <div className=" grid grid-cols-3  gap-2 xl:grid-cols-5">
            {productChoice.color.map((color, index) => {
              return (
                <ShowColorVariant
                  key={index}
                  color={color}
                  colorCode={productChoice.colorCode[index]}
                  setselectColor={() => {
                    setSelectedProduct((prev) => {
                      const product = productdetail.variants.find(
                        (variant) =>
                          variant.color === color &&
                          variant.size === selectedProduct.size
                      );
                      return {
                        ...prev,
                        color: color,
                        skuCode: product.skuCode,
                        remains: product.remains,
                      };
                    });
                  }}
                  selectColor={selectedProduct.color === color}
                />
              );
            })}
          </div>
        </div>
        {/* Size Select */}
        {productChoice.size.length > 0 && (
          <div className="flex flex-col gap-2">
            <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
              Size
            </h5>
            <div className=" grid grid-cols-5  gap-2">
              {productChoice.size.map((size, index) => {
                const border_color =
                  selectedProduct.size === size
                    ? "border-[#C1CD00]"
                    : "border-[#E1E1E1]";
                return (
                  <button
                    key={index}
                    className={`flex justify-center items-center font-['Poppins'] text-secondary-900 h-[54px] text-center py-2 border ${border_color} cursor-pointer`}
                    onClick={() => {
                      setSelectedProduct((prev) => {
                        const product = productdetail.variants.find(
                          (variant) =>
                            variant.color === selectedProduct.color &&
                            variant.size === size
                        );
                        return {
                          ...prev,
                          size: size,
                          skuCode: product.skuCode,
                          remains: product.remains,
                        };
                      });
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {/* Quantity Select */}
        <div className="flex flex-col gap-2">
          <h5 className=" font-normal text-[1rem] font-['Poppins'] text-secondary-700">
            Qty.
          </h5>
          <Dropdown
            setselectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
            outofstock={outofstock}
          />
        </div>
        <button
          className={` font-light font-['Poppins'] h-[54px] duration-500 ${
            outofstock
              ? " bg-secondary-300 text-secondary-500"
              : "bg-secondary-900 text-secondary-50 hover:bg-primary-700 focus:outline-none cursor-pointer"
          } `}
          disabled={outofstock}
          onClick={() => setShowModal(true)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default SelectionComponent;
