import React, { useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import ProductCard from "./productCard";
import { getData } from "../utils/apiHandler";
import Skeleton from "./Skeleton";
import StarRating from "./StarRating";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";
import SkCard from "./SkCard";

const POSITION = {
  start: "",
  center: "mx-auto",
};

function ContainerSlot({
  containerLabel,
  containerLabelPosition = "start",
  collection = "price-down",
  categories = null,
}) {
  const { data, isLoading, setLoading, setSuccess, setError } = useBaseState();
  const [max, setMax] = useState(0);
  const [page, setPage] = useState(0);
  const [startAfter, setStartAfter] = useState(null);
  const [cursor, setCursor] = useState(null);
  const totalPage = Math.floor(max / page);
  useEffect(() => {
    if (page === 0) {
      setLoading();
    }
    (async () => {
      const saved = loadLocal(
        `${LOCALSTORAGE_KEY.slot}${categories}${collection}${startAfter}`
      );
      if (saved) {
        const {
          data: resData,
          pagination: { total, nextCursor },
        } = saved;
        setSuccess(resData);
        setCursor(nextCursor);
        setMax(total);
        setPage((p) => p + 1);
      }
      try {
        const result = await getData("products", {
          params: {
            sort: "ratings:desc",
            collection,
            limit: 4,
            categories,
            startAfter,
          },
        });

        saveToLocal(
          `${LOCALSTORAGE_KEY.slot}${categories}${collection}${startAfter}`
        )(result, 1 / (24 * 4));
        const {
          data: resData,
          pagination: { total, nextCursor },
        } = result;
        setSuccess(resData);
        setCursor(nextCursor);
        setMax(total);
        setPage((p) => p + 1);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [startAfter]);
  // pagination logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (page === totalPage) {
        setStartAfter(null);
        setPage(0);
        return;
      }
      setStartAfter(cursor);
    }, 5 * 60 * 1000);
    return () => clearInterval(timer);
  }, [cursor]);
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
