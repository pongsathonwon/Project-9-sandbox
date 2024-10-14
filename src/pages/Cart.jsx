import React from "react";

const SummaryRow = ({
  name,
  price,
  leftClassname = "",
  rightClassname = "",
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className={`${leftClassname} capitalize`}>{name}</span>
      <span className={`${rightClassname} text-secondary-700`}>{price}</span>
    </div>
  );
};
const SummarySection = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 border-b pb-4 border-secondary-300">
      {children}
    </div>
  );
};

const RightCardSection = () => {
  return (
    <div className="lg:w-3/5 p-4 flex flex-col gap-6">
      <h6>Items</h6>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-[261px] md:w-[403px] aspect-square"
            srcSet="empty-cart-small.png 261w, empty-cart-large.png 403w"
            sizes="(max-width:768px) 261w, 403w"
            src="empty-cart-small.png"
            alt="card placeholder"
          />
          <h5>Your cart is empty</h5>
          <p className="text-xl">
            Look like you have not added anything to your carts yet. <br />
            Go ahead & explore stuff
          </p>
        </div>
        <button>continue shopping</button>
      </div>
    </div>
  );
};

const LeftCardSection = () => {
  return (
    <div className="lg:w-2/5 p-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <SummaryRow
          name="summary"
          price="0 items"
          leftClassname={"text-2xl font-bold"}
          rightClassname={"text-xl font-bold"}
        />
        <SummarySection>
          <SummaryRow
            name={"no item"}
            price={0}
            leftClassname="text-secondary-500"
            rightClassname="text-secondary-500"
          />
        </SummarySection>
        <SummarySection>
          <SummaryRow
            name={"subtotal"}
            price={0}
            leftClassname="text-secondary-500"
            rightClassname="text-secondary-500"
          />{" "}
          <SummaryRow
            name={"shipping fee"}
            price={0}
            leftClassname="text-secondary-500"
            rightClassname="text-secondary-500"
          />
        </SummarySection>
        <SummaryRow
          name={"Total"}
          price={0}
          leftClassname="font-bold text-xl text-secondary-500"
          rightClassname="font-bold text-xl text-secondary-500"
        />
      </div>
      <div className="flex flex-col gap-4">
        <button>checkout</button>
        <button>continue shoping</button>
      </div>
    </div>
  );
};

function Cart() {
  return (
    <section className="px-4 lg:px-32 pt-6 lg:pt-10 pb-16 lg:pb-20 flex flex-col gap-10 lg:gap-12 xl:gap-20">
      <div className="flex flex-col gap-10">
        <h5>My cart</h5>
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* left section */}
          <RightCardSection />
          {/* right section */}
          <LeftCardSection />
        </div>
      </div>
      <div>alsolike</div>
    </section>
  );
}

export default Cart;
