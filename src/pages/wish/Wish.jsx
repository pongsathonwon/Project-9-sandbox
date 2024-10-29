import React, { useEffect } from "react";
import SkCard from "../../components/SkCard";
import { Link } from "react-router-dom";
import ContainerSlot from "../../components/ContainerSlot";
import CartBtn from "../Cart/CartBtn";
import { useWishContext } from "../../context/WishContaxtProvider";
import useBaseState from "../../hooks/useBaseState";
import { getPermalink } from "../../utils/getPermalink";
import ProductCard from "../../components/productCard";

function Wish() {
  const { data, setSuccess, isLoading, setLoading, setError } = useBaseState();
  const { wishList } = useWishContext();
  useEffect(() => {
    setLoading();
    (async () => {
      try {
        const resList = await Promise.all(wishList.map(getPermalink));
        setSuccess(resList);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    })();
  }, [wishList]);
  return (
    <section className="px-[1.125rem] lg:px-32 pt-6 pb-16 flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <h5 className=" capitalize">wishlist</h5>
        <div className="flex flex-col gap-10">
          <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-16 justify-items-center">
            {data &&
              data.map(
                ({
                  id,
                  name,
                  description,
                  price,
                  promotionalPrice,
                  imageUrls,
                  ratings,
                  permalink,
                }) => (
                  <ProductCard
                    key={id}
                    {...{
                      name,
                      description,
                      price,
                      promotionalPrice,
                      imageUrl: imageUrls[0],
                      ratings,
                      permalink,
                    }}
                  />
                )
              )}
            {isLoading && [...Array(6)].map((_, i) => <SkCard key={i} />)}
          </article>
          {wishList.length === 0 && (
            <h5 className="capitalize text-center">no wishlist item</h5>
          )}
          <div className="flex justify-center">
            <Link>
              <CartBtn btnLabel="Continue shopping" />
            </Link>
          </div>
        </div>
      </div>
      <ContainerSlot />
    </section>
  );
}

export default Wish;
