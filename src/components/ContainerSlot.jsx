import React, { useEffect } from "react";
import useBaseState from "../hooks/useBaseState";
import ProductCard from "./productCard";
import { getData } from "../utils/apiHandler";
import Skeleton from "./Skeleton";
import StarRating from "./StarRating";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";

const POSITION = {
  start: "",
  center: "mx-auto",
};

const SkCard = () => {
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
};

function ContainerSlot({
  containerLabel,
  containerLabelPosition = "start",
  collection = "price-down",
  categories,
}) {
  const { data, isLoading, setLoading, setSuccess, setError } = useBaseState();
  useEffect(() => {
    setLoading();
    (async () => {
      const saved = loadLocal(LOCALSTORAGE_KEY.slot);
      if (saved) {
        setSuccess(saved);
        return;
      }
      try {
        const { data: resData } = await getData("products", {
          params: { sort: "ratings:desc", collection, limit: 4, categories },
        });
        saveToLocal(LOCALSTORAGE_KEY.slot)(resData, 1 / (24 * 12));
        setSuccess(resData);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-16">
      <h5 className={`${POSITION[containerLabelPosition]} capitalize`}>
        {containerLabel}
      </h5>
      <div
        style={{ scrollbarWidth: "thin" }}
        className="flex-col flex gap-10 items-center lg:flex-row md:justify-between lg:overflow-x-auto"
      >
        {isLoading
          ? [...Array(4)].map((_, i) => <SkCard key={i} />)
          : data?.map(
              ({
                name,
                description,
                price,
                promotionalPrice,
                imageUrls,
                ratings,
                skuCode,
                permalink,
              }) => (
                <ProductCard
                  key={skuCode}
                  {...{
                    name,
                    description,
                    price,
                    promotionalPrice,
                    ratings,
                    imageUrl: imageUrls[0],
                    permalink,
                  }}
                />
              )
            )}
      </div>
    </div>
  );
}

export default ContainerSlot;
