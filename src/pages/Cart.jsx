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
    <div className="w-2/3 p-4 flex flex-col gap-6">
      <h6>Items</h6>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 items-center text-center">
          <img src="empty-cart-large.png" alt="card placeholder" />
          <h5>Your cart is empty</h5>
          <p className="text-lg">
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
    <div className="w-1/3 p-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <SummaryRow
          name="summary"
          price="0 items"
          leftClassname={"text-2xl font-bold"}
          rightClassname={"text-lg font-bold"}
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
          leftClassname="font-bold text-lg text-secondary-500"
          rightClassname="font-bold text-lg text-secondary-500"
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
    <section className="px-16 md:px-32 pt-6 md:pt-10 pb-16 md:pb-20 flex flex-col gap-10 md:gap-12 lg:gap-20">
      <div className="flex flex-col gap-10">
        <h5>My cart</h5>
        <div className="flex flex-col gap-10 md:flex-row">
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
