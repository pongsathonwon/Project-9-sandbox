import React from "react";
import SkCard from "../../components/SkCard";
import { useAuthContext } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import ContainerSlot from "../../components/ContainerSlot";
import CartBtn from "../Cart/CartBtn";

function Wish() {
  const { account } = useAuthContext();

  return (
    <section className="px-[1.125rem] lg:px-32 pt-6 pb-16 flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <h5 className=" capitalize">wishlist</h5>
        <div className="flex flex-col gap-10">
          <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-16 justify-items-center">
            {[...Array(6)].map((_, i) => (
              <SkCard key={i} />
            ))}
          </article>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-y-4 flex-1 md:grid-cols-2 justify-items-center">
              <CartBtn btnLabel="Add to Cart" width="50%" />

              <Link className="w-1/2">
                <CartBtn severity="secondary" btnLabel="Continue shopping" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContainerSlot />
    </section>
  );
}

export default Wish;
