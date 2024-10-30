import React from "react";
import { useCartContext } from "../../context/CartsContextProvider";
import ContainerSlot from "../../components/ContainerSlot";
import RightCartSession from "./RightCartSession";
import LeftCartSession from "./LeftCartSession";

function Cart() {
  const { isEmptyCart, data } = useCartContext();
  const permalinkList = data?.map(({ permalink }) => permalink) ?? [];
  const catList =
    data?.reduce((prev, { categories }) => [...prev, ...categories], []) ?? [];
  const set = new Set(catList);
  const cat = [...set]
    .filter((s) => s.includes("ladies-") || s.includes("men-"))
    .join(",");
  return (
    <section className="px-[1.125rem] lg:px-16 2xl:px-32 pt-6 xl:pt-10 pb-16 lg:pb-20 flex flex-col gap-10 lg:gap-12 2xl:gap-20">
      <div className="flex flex-col gap-10">
        <h5>My cart</h5>
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* left section */}
          <LeftCartSession />
          {/* right section */}
          <RightCartSession />
        </div>
      </div>

      <ContainerSlot
        containerLabel="people also like these"
        notinclude={permalinkList}
        categories={cat}
        collection={null}
      />
    </section>
  );
}

export default Cart;
