import React from "react";

const ITEM_ACTION = {
  changeColor: "CHANGE_COLOR",
  changeSize: "CHANGE_SIZE",
};

const reducer = (state, { type, payload }) => {
  if (type === ITEM_ACTION.changeColor) {
    return { ...state, curColor: payload };
  }
  if (type === ITEM_ACTION.changeSize) {
    return { ...state, curSize: payload };
  }
  throw new Error("no such action");
};

function useItemState({ curColor, curSize, changeRemainFn }) {
  if (!color || !size || !changeRemainFn)
    throw new Error("useItemState required initial state");
  const [state, dispatch] = React.useReducer(reducer, {
    curColor,
    curSize,
  });
  const changeColor = (color) =>
    dispatch({ type: ITEM_ACTION.changeColor, payload: color });
  const changeSize = (size) =>
    dispatch({ type: ITEM_ACTION.changeSize, payload: size });
  const { remains: curRemains, skuCode: curSkuCode } = changeRemainFn(
    state.curColor,
    state.curSize
  );
  return { ...state, curRemains, curSkuCode, changeColor, changeSize };
}

export default useItemState;
