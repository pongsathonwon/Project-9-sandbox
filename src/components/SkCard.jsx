import React from "react";
import Skeleton from "./Skeleton";
import StarRating from "./StarRating";

function SkCard() {
  return (
    <div
      style={{ width: "267px", height: "453px" }}
      className="flex flex-col justify-between"
    >
      <Skeleton bgColor="dark" className="w-[267px] aspect-square" />
      <Skeleton
        bgColor="light"
        style={{ height: "3rem", width: `${40 * (1 + Math.random())}%` }}
        className="rounded-lg"
      />
      <Skeleton
        style={{ height: "1.25rem", width: `${50 * (1 + Math.random())}%` }}
        className="rounded-lg"
      />
      <div className="animate-pulse">
        <StarRating rating={0} />
      </div>
      <div>
        <Skeleton
          style={{ width: `${20 * (1 + Math.random())}%` }}
          className="ml-auto h-12 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SkCard;
