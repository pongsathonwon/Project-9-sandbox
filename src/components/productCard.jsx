import StarRating from "./StarRating";

const ProductCard = ({
  name,
  description,
  price,
  promotionalPrice,
  imageUrl,
  ratings,
}) => {
  const isDiscounted = promotionalPrice < price;
  return (
    <div className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
      {/* Product Image */}
      <img
        className="w-full h-[267px] object-cover"
        src={imageUrl}
        alt={name}
      />

      {/* Discount Tag */}
      {isDiscounted && (
        <div className="absolute top-[25px] right-0 h-[34px] px-2.5 py-1 bg-[#ff000d] flex justify-start items-center">
          <div className="text-white text-base font-normal font-poppins leading-tight">
            - {Math.round(((price - promotionalPrice) / price) * 100)}%
          </div>
        </div>
      )}

      {/* Product Detail */}
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose overflow-hidden overflow-ellipsis whitespace-nowrap w-full">
          {name}
        </div>
        <div className="text-[#626262] text-base font-normal font-['Poppins'] leading-tight overflow-hidden overflow-ellipsis whitespace-nowrap w-full">
          {description}
        </div>
        <div className="flex justify-start items-center pt-2">
          <StarRating rating={ratings} />
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          {isDiscounted ? (
            <>
              <div className="text-[#626262] text-sm font-normal font-poppins line-through leading-tight">
                {price.toLocaleString()}
              </div>
              <div className="text-right text-[#ff000d] text-2xl font-bold font-poppins leading-loose">
                THB {promotionalPrice.toLocaleString()}
              </div>
            </>
          ) : (
            <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose">
              THB {price.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
