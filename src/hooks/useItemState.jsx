import React from "react";

const ITEM_ACTION = {
  changeColor: "CHANGE_COLOR",
  changeSize: "CHANGE_SIZE",
};

const reducer = (state, { type, payload }) => {
  if (type === ITEM_ACTION.changeColor) {
    return { ...state, color: payload };
  }
  if (type === ITEM_ACTION.changeSize) {
    return { ...state, size: payload };
  }
  throw new Error("no such action");
};

function useItemState({ color, size, changeRemainFn }) {
  if (!color || !size || !changeRemainFn)
    throw new Error("useItemState required initial state");
  const [state, dispatch] = React.useReducer(reducer, {
    color,
    size,
  });
  const changeColor = (color) =>
    dispatch({ type: ITEM_ACTION.changeColor, payload: color });
  const changeSize = (size) =>
    dispatch({ type: ITEM_ACTION.changeSize, payload: size });
  const endpointResult = changeRemainFn(state.color, state.size);
  return { ...state, endpointResult, changeColor, changeSize };
}

export default useItemState;
