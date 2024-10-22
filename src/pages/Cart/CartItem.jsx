import React from "react";
import DeleteIcon from "../../components/Icon/DeleteIcon";
import {
  useCartContext,
  useCartMutation,
} from "../../context/CartsContextProvider";
import Skeleton from "../../components/Skeleton";

function CartItem({
  id,
  name,
  quantity,
  promotionalPrice,
  variants,
  imageUrls,
  color,
  size,
  colorList,
}) {
  const { isLoading } = useCartContext();
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

  if (isLoading) {
    return (
      <Skeleton className="flex flex-col lg:flex-row gap-10">
        <Skeleton
          bgColor="dark"
          className="w-[209px] aspect-square mx-auto lg:mx-0"
        />
        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between">
            <Skeleton
              bgColor="light"
              style={{ width: `${40 * (1 + Math.random())}%` }}
              className="h-10 rounded-lg"
            />
            <Skeleton bgColor="dark" className="squre-group rounded-lg" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 xl:gap-4">
              <Skeleton bgColor="dark" className="h-10 w-20 rounded-lg" />
              <div className="flex gap-4 lg:gap-2 xl:gap-4">
                {/* size dropdown */}
                <Skeleton bgColor="light" className="h-10 w-20 rounded-lg" />
                {/* amount dropdown */}
                <Skeleton bgColor="dark" className="h-10 w-20 rounded-lg" />
              </div>
            </div>
            <Skeleton bgColor="light" className="h-8 w-32 rounded-lg mt-auto" />
          </div>
        </div>
      </Skeleton>
    );
  }

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
              {sizeList[0] !== "" && (
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
              )}
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
}

export default CartItem;
