import React from "react";

function LoadingCartItem() {
  return (
    <div className="flex flex-col w-full lg:flex-row gap-10">
      <Skeleton
        bgColor="dark"
        className="w-[162px] aspect-square mx-auto lg:mx-0"
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <Skeleton
            bgColor="light"
            style={{ width: `${40 * (1 + Math.random())}%` }}
            className="h-10 rounded-lg"
          />
          <Skeleton bgColor="dark" className="squre-group rounded-lg" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 xl:gap-4">
            <Skeleton bgColor="dark" className="h-10 w-20 rounded-lg" />
            <div className="flex gap-4 lg:gap-2 xl:gap-4">
              {/* size dropdown */}
              <Skeleton bgColor="light" className="h-10 w-20 rounded-lg" />
              {/* amount dropdown */}
              <Skeleton bgColor="dark" className="h-10 w-20 rounded-lg" />
            </div>
          </div>
          <Skeleton bgColor="light" className="h-8 w-32 rounded-lg mt-auto" />
        </div>
      </div>
    </div>
  );
}

export default LoadingCartItem;
