import React, { useEffect } from "react";
import useBaseState from "../hooks/useBaseState";
import ProductCard from "./productCard";
import { getData } from "../utils/apiHandler";

const POSITION = {
  start: "",
  center: "mx-auto",
};

function ContainerSlot({
  containerLabel,
  containerLabelPosition = "start",
  collection = "new-arrivals",
}) {
  const { data, isLoading, setLoading, setSuccess, setError } = useBaseState();
  console.table(data);
  useEffect(() => {
    setLoading();
    (async () => {
      try {
        const { data: resData } = await getData("products", {
          params: { sort: "ratings:desc", collection, limit: 4 },
        });
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
      <div className="flex-col flex gap-10 items-center md:flex-row md:justify-between">
        {isLoading
          ? [...Array(4)].map((_, i) => <div key={i}>loading</div>)
          : data?.map(
              ({
                name,
                description,
                price,
                promotionalPrice,
                imageUrls,
                ratings,
                skuCode,
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
                  }}
                />
              )
            )}
      </div>
    </div>
  );
}

export default ContainerSlot;
