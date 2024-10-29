import React from "react";
import { useCartContext } from "../../context/CartsContextProvider";
import ContainerSlot from "../../components/ContainerSlot";
import RightCartSession from "./RightCartSession";
import LeftCartSession from "./LeftCartSession";

function Cart() {
  const { isEmptyCart } = useCartContext();
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

      <ContainerSlot containerLabel="people also like these" />
    </section>
  );
}

export default Cart;
