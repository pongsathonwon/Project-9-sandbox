import Skeleton from "../../components/Skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-[280px] bg-white rounded-lg p-4">
      {/* Image */}
      <Skeleton className="w-full aspect-square rounded-lg mb-4" />

      {/* Info */}
      <Skeleton className="w-full h-16 rounded-lg" />
    </div>
  );
};

export default ProductCardSkeleton;
