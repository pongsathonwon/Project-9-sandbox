import StarRating from "../../components/StarRating";
import { numberWithCommas } from "../../utils/productDetail";

function DescriptionComponent({
  productdetail,
  isDiscount,
  outofstock,
  favorite,
  setFavorite,
}) {
  return (
    <>
      {/* Name, Description, Price, Star */}
      <div className=" flex flex-col gap-6">
        {/* Name and Description */}
        <div className="flex flex-col gap-1 xl:gap-4">
          <div className="flex justify-between items-center">
            {/* ID and Favorite */}
            <p className="font-semibold font-['Poppins'] text-[18px] xl:font-bold xl:text-2xl">
              ID: {productdetail.skuCode}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              onClick={() => setFavorite(!favorite)}
              className={"cursor-pointer"}
            >
              <rect width="40" height="40" fill="none" />
              <path
                d="M27.3499 14.0256C25.5304 12.4621 22.8244 12.7433 21.1543 14.481L20.5002 15.1607L19.8462 14.481C18.1794 12.7433 15.4701 12.4621 13.6506 14.0256C11.5655 15.8203 11.4559 19.0412 13.3219 20.9865L19.7465 27.6761C20.1616 28.108 20.8356 28.108 21.2506 27.6761L27.6753 20.9865C29.5446 19.0412 29.435 15.8203 27.3499 14.0256Z"
                fill={favorite ? "#FF000D" : "none"}
                stroke={favorite ? "none" : "black"}
                strokeWidth="1.5"
              />
            </svg>
          </div>
          {/* Name and Des of Product */}
          <h4 className="font-bold font-['Poppins'] xl:text-[3rem]">
            {productdetail.name}
          </h4>
          <p className=" text-secondary-700 font-semibold font-['Poppins'] xl:text-2xl xl:font-bold ">
            {productdetail.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {outofstock ? (
            <>
              <h5 className="font-bold font-['Poppins'] self-start py-2 xl:text-[2.5rem]">
                THB {numberWithCommas(productdetail.promotionalPrice)}
              </h5>
              {/* Add From THB 2,000.00 */}
              <p className=" font-bold font-['Poppins'] self-start text-danger xl:text-[24px]">
                Out of stock
              </p>
            </>
          ) : isDiscount ? (
            <>
              <h5 className="font-bold font-['Poppins'] self-start py-2 px-[10px] bg-danger text-secondary-50 xl:text-[2.5rem]">
                THB {numberWithCommas(productdetail.promotionalPrice)}
              </h5>
              {/* Add From THB 2,000.00 */}
              <p className=" font-semibold font-['Poppins'] self-start  text-secondary-900">
                From{" "}
                <span className=" line-through ">
                  THB {numberWithCommas(productdetail.price)}
                </span>
              </p>
            </>
          ) : (
            <h5 className="font-bold font-['Poppins'] self-start py-2 px-[10px] xl:text-[2.5rem]">
              THB {numberWithCommas(productdetail.price)}
            </h5>
          )}
        </div>

        <StarRating rating={productdetail.ratings} />
      </div>
    </>
  );
}

export default DescriptionComponent;
