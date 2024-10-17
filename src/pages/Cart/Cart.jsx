import React from "react";
import {
  useCartContext,
  useCartMutation,
} from "../../context/CartsContextProvider";
import ContainerSlot from "../../components/ContainerSlot";

const DeleteIcon = () => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.7937 17.1134L25.8817 28.5934C25.8289 29.2061 25.3253 29.6675 24.7126 29.6675H15.4441C14.8279 29.6675 14.3278 29.2062 14.275 28.597L13.363 17.1135C13.3314 16.7261 12.9968 16.4374 12.6058 16.4656C12.2185 16.4972 11.9298 16.8354 11.958 17.2227L12.87 28.7097C12.9826 30.0585 14.0884 31.0762 15.4441 31.0762H24.7161C26.0683 31.0762 27.1742 30.0585 27.2903 28.7062L28.2023 17.2227C28.2339 16.8354 27.9452 16.4973 27.5544 16.4656C27.1635 16.4374 26.8254 16.7261 26.7938 17.1134L26.7937 17.1134Z"
          fill="#222222"
        />
        <path
          d="M16.4372 13.092C16.8245 13.092 17.1415 12.775 17.1415 12.3877V11.0002C17.1415 10.6727 17.4056 10.4086 17.7331 10.4086H21.8849C22.2124 10.4086 22.4765 10.6727 22.4765 11.0002V12.3877C22.4765 12.775 22.7935 13.092 23.1808 13.092C23.5681 13.092 23.8851 12.775 23.8851 12.3877V11.0002C23.8851 9.898 22.9871 9 21.8849 9H17.7331C16.6309 9 15.7329 9.89803 15.7329 11.0002V12.3877C15.7329 12.7786 16.0463 13.092 16.4372 13.092Z"
          fill="#222222"
        />
        <path
          d="M10.7043 15.564H28.9842C29.3715 15.564 29.6885 15.247 29.6885 14.8597C29.6885 14.4723 29.3715 14.1554 28.9842 14.1554H10.7043C10.317 14.1554 10 14.4723 10 14.8597C10 15.247 10.317 15.564 10.7043 15.564Z"
          fill="#222222"
        />
      </svg>
    </>
  );
};

const SummaryRow = ({
  name,
  price,
  leftClassname = "",
  rightClassname = "",
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className={`capitalize ${leftClassname}`}>{name}</span>
      <span className={rightClassname}>{price}</span>
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

const CartItem = ({
  id,
  name,
  quantity,
  promotionalPrice,
  variants,
  imageUrls,
  color,
  size,
  colorList,
  isLoading,
}) => {
  if (isLoading) return <div>loading item...</div>;
  const { deleteCart, updateCartByItem } = useCartMutation();
  const [curColor, setCurColor] = React.useState(color);
  const [curSize, setCurSize] = React.useState(size);
  const { remains, skuCode } = variants.find(
    ({ color, size, remains }) =>
      color === curColor && size === curSize && remains !== 0
  ) ?? { remains: 0, skuCode: "" };
  const sizeList = variants
    .filter(({ color, remains }) => color === curColor && remains !== 0)
    .map(({ size }) => size)
    .sort();
  console.log("name:", name, "-", "id:", id);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <img
        className="w-[162px] w-max-[209px] aspect-square mx-auto lg:mx-0"
        src={imageUrls[0] ?? ""}
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <h6>{name}</h6>
          <button
            className="squre-group"
            onClick={async () => await deleteCart(id)}
          >
            <DeleteIcon />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 xl:gap-4">
            {/* color dropdown */}
            <div className="flex flex-col gap-2">
              <span className="text-secondary-700">color</span>
              <select
                className="h-[54px]"
                value={curColor}
                onChange={({ target }) => setCurColor(target.value)}
              >
                {colorList.map((c) => (
                  <option key={`${name}_${c}`} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 lg:gap-2 xl:gap-4">
              {/* size dropdown */}
              <div className="flex flex-col gap-2">
                <span className="text-secondary-700">size</span>
                <select
                  className="h-[54px]"
                  value={curSize}
                  onChange={({ target }) => setCurSize(target.value)}
                >
                  {sizeList.map((s) => (
                    <option key={`${name}_${s}`} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              {/* amount dropdown */}
              <div className="flex flex-col gap-2">
                <span className="text-secondary-700">quantity</span>
                <select
                  className="h-[54px]"
                  value={quantity}
                  onChange={async ({ target }) =>
                    await updateCartByItem(id, {
                      skuCode,
                      quantity: Number(target.value),
                    })
                  }
                >
                  {[...Array(remains ?? 0)].map((_, i) => (
                    <option key={`${id}-${i}`} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold mt-auto">
            THB: {promotionalPrice * quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

const LeftCardSection = () => {
  const { data, isEmptyCart } = useCartContext();
  console.log(data);
  if (isEmptyCart) {
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
  } else {
    return (
      <div className="p-4 flex flex-col gap-6 lg:w-2/3">
        <h6>Items</h6>
        <div className="flex flex-col gap-6">
          {data?.map((d) => (
            <CartItem key={d.id} {...d} />
          ))}
        </div>
      </div>
    );
  }
};

const RightCardSection = () => {
  const SHIPPING_FEE = 0;
  const { summaryList, subtotal, isEmptyCart } = useCartContext();
  return (
    <div className="p-6 flex flex-col gap-10 lg:w-1/3">
      <div className="flex flex-col gap-6">
        {/* summary header */}
        <SummaryRow
          name="summary"
          price={`${subtotal.total} items`}
          leftClassname={"text-2xl font-bold text-black"}
          rightClassname={"text-xl font-semi"}
        />
        {/* summary items */}
        <SummarySection>
          {summaryList.map(({ name, sum, quantity }) => (
            <SummaryRow
              key={name}
              name={`${name} ${quantity === 1 ? "" : "X" + quantity}`}
              price={sum}
              leftClassname={isEmptyCart ? "text-secondary-500" : ""}
              rightClassname={
                isEmptyCart ? "text-secondary-500" : "text-secondary-700"
              }
            />
          ))}
        </SummarySection>
        {/* summary shipping */}
        <SummarySection>
          <SummaryRow
            name="subtotal"
            price={subtotal.subtotal}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />{" "}
          <SummaryRow
            name={"shipping fee"}
            price={SHIPPING_FEE === 0 ? "Free" : SHIPPING_FEE}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />
        </SummarySection>
        {/* summary total */}
        <SummaryRow
          name={"Total"}
          price={SHIPPING_FEE + subtotal.subtotal}
          leftClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
          rightClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
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
  const { isEmptyCart, isLoading } = useCartContext();
  if (isLoading) return <div>loading...</div>;
  return (
    <section className="px-4 lg:px-16 xl:px-32 pt-6 lg:pt-10 pb-16 lg:pb-20 flex flex-col gap-10 lg:gap-12 xl:gap-20">
      <div className="flex flex-col gap-10">
        <h5>My cart</h5>
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* left section */}
          <LeftCardSection />
          {/* right section */}
          <RightCardSection />
        </div>
      </div>
      {!isEmptyCart && (
        <ContainerSlot containerLabel="people also like these"></ContainerSlot>
      )}
    </section>
  );
}

export default Cart;
