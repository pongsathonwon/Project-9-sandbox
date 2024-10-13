import React from "react";

const ACTION_TYPES = {
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const reducer = (state, { type, playload }) => {
  if (type === ACTION_TYPES.loading) {
    return { isLoading: true, erorr: null, data: [] };
  }
  if (type === ACTION_TYPES.success) {
    return { isLoading: false, erorr: null, data: playload };
  }
  if (type === ACTION_TYPES.error) {
    return { isLoading: false, error: playload, data: [] };
  }
  throw new Error("no such action");
};

function BaseState() {
  const [{ isLoading, erorr, data }, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    error: null,
    data: [],
  });
  return { isLoading, erorr, data, dispatch };
}

export default BaseState;
