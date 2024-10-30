import React, { useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import ProductCard from "./productCard";
import { getData } from "../utils/apiHandler";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";
import ProductCardSkeleton from "../pages/Clothing/ProductCardSkeleton";

const POSITION = {
  start: "",
  center: "mx-auto",
};

function ContainerSlot({
  containerLabel,
  containerLabelPosition = "start",
  collection = "new-arrivals",
  categories = null,
  notinclude = [],
}) {
  const { data, isLoading, setLoading, setSuccess, setError } = useBaseState();
  const [max, setMax] = useState(0);
  const [page, setPage] = useState(0);
  const [startAfter, setStartAfter] = useState(null);
  const [cursor, setCursor] = useState(null);
  const totalPage = Math.floor(max / 5);
  const filterList =
    notinclude.length !== 0
      ? data?.filter(({ permalink }) => {
          if (notinclude.length === 0) return true;
          return !notinclude.includes(permalink);
        })
      : data ?? [];
  const renderList =
    filterList?.lenght > 4 ? filterList : filterList?.filter((_, i) => i <= 3);
  useEffect(() => {
    (async () => {
      setLoading();
      try {
        const result = await getData("products", {
          params: {
            sort: "ratings:desc",
            collection,
            limit: 5,
            categories,
            startAfter,
          },
        });

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
  }, [startAfter, categories]);
  // pagination logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (page === totalPage) {
        setStartAfter(null);
        setPage(0);
        return;
      }
      setStartAfter(cursor);
    }, 2 * 60 * 1000);
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
          ? [...Array(4)].map((_, i) => <ProductCardSkeleton key={i} />)
          : renderList?.map(
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
