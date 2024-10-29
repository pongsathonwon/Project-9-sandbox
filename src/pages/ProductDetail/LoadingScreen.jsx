const LoadingScreen = () => {
  return (
    <>
      <div className="px-4 pt-6 pb-24 flex flex-col items-center justify-center gap-10 select-none xl:flex-row xl:items-start xl:pt-16 xl:px-[124px] 2xl:px-[160px] animate-pulse">
        {/* Image Section */}
        <div className="grid grid-cols-5 gap-y-4 gap-x-2 w-[21.4375rem] xl:w-[36rem] 2xl:w-[48.75rem]">
          {/* Main Image */}
          <div className="w-full h-[21.4375rem] col-span-5 relative xl:h-[37.3125rem] 2xl:h-[48.75rem]  bg-secondary-500 rounded-md" />

          {/* Thumbnail Images */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-full h-[80px] col-span-1  bg-secondary-500 rounded-md xl:h-[167px] 2xl:h-[172px]"
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="flex flex-col w-[21.4375rem] gap-10 xl:w-[36.0625rem] 2xl:w-[780px]">
          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {/* SKU and Favorite */}
              <div className="flex justify-between items-center">
                <div className="h-6 w-32  bg-secondary-300 rounded" />
                <div className="h-10 w-10  bg-secondary-500 rounded-full" />
              </div>

              {/* Title and Description */}
              <div className="h-12 w-full  bg-secondary-500 rounded xl:h-16" />
              <div className="h-20 w-full  bg-secondary-300 rounded" />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <div className="h-12 w-48  bg-secondary-300 rounded xl:h-16" />
              <div className="h-6 w-32  bg-secondary-300 rounded" />
            </div>

            {/* Rating */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="h-6 w-6  bg-secondary-500 rounded-full" />
              ))}
            </div>
          </div>

          {/* Selection Options */}
          <div className="flex flex-col gap-6">
            {/* Color Selection */}
            <div className="flex flex-col gap-2">
              <div className="h-6 w-20  bg-secondary-300 rounded" />
              <div className="grid grid-cols-3 xl:grid-cols-5 gap-2">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="h-[55px] w-[55px]  bg-secondary-300 rounded" />
                    <div className="h-4 w-16  bg-secondary-300 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col gap-2">
              <div className="h-6 w-20  bg-secondary-300 rounded" />
              <div className="grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="h-[54px]  bg-secondary-300 rounded" />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <div className="h-6 w-20  bg-secondary-300 rounded" />
              <div className="h-[54px]  bg-secondary-300 rounded" />
            </div>

            {/* Add to Cart Button */}
            <div className="h-[54px]  bg-secondary-300 rounded" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
