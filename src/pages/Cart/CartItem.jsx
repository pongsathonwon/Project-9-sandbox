import React from "react";
import DeleteIcon from "../../components/Icon/DeleteIcon";
import {
  useCartContext,
  useCartMutation,
} from "../../context/CartsContextProvider";
import Skeleton from "../../components/Skeleton";
import SelectBox from "./SelectBox";
import { numberWithCommas } from "../../utils/productDetail";

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
      <div className="flex flex-col w-full lg:flex-row gap-10">
        <Skeleton
          bgColor="dark"
          className="w-[162px] aspect-square mx-auto lg:mx-0"
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
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <img
        className="w-[276px] lg:w-[209px] aspect-square mx-auto lg:mx-0 xl:w-[276px] object-cover object-top"
        src={imageUrls[0] ?? ""}
        alt={name + " product image"}
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
        <div className="flex flex-col gap-2 2xl:flex-row justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 lg:min-w-[23rem] xl:gap-4">
            {/* color dropdown */}
            <div className="flex flex-col gap-2 z-10">
              <span className="text-secondary-700">color</span>
              <SelectBox
                value={curColor}
                onChange={(v) => setCurColor(v)}
                possible={colorList}
              />
            </div>
            <div className="flex gap-4 lg:gap-2 xl:gap-4">
              {/* size dropdown */}
              {sizeList[0] !== "" && (
                <div className="flex flex-col gap-2">
                  <span className="text-secondary-700">size</span>
                  <SelectBox
                    value={curSize}
                    possible={sizeList}
                    onChange={(v) => setCurSize(v)}
                  />
                </div>
              )}
              {/* amount dropdown */}
              <div className="flex flex-col gap-2">
                <span className="text-secondary-700">quantity</span>
                <SelectBox
                  onChange={async (v) =>
                    await updateCartByItem(id, {
                      skuCode,
                      quantity: Number(v),
                    })
                  }
                  value={quantity}
                  possible={[...Array(remains ?? 0)].map((_, i) => i + 1)}
                />
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold mt-auto ml-auto">
            THB: {numberWithCommas(promotionalPrice * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
