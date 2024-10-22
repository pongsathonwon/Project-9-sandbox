import React, { useEffect, useReducer, useState } from "react";

const SORT_PARAMS = {
  price: "price",
  name: "name",
  ratings: "ratings",
};

const SORT_MODES = {
  asc: "asc",
  desc: "desc",
};

const ACTION_TYPES = {
  setParams: "SET_PARAMS",
};

const initState = {
  sortParam: SORT_PARAMS.ratings,
  sortMode: SORT_MODES.desc,
  limit: 6,
};

const reducer = (state, { action, payload }) => {
  if (action === ACTION_TYPES.setParams) {
    return { ...state, ...payload };
  }
  throw new Error("no such actions");
};

function usePagination() {
  const [categories, setCategories] = useState(null);
  const [collection, setCollection] = useState(null);
  const [sortParams, setSortParams] = useState(SORT_MODES.ratings);
  const [sortMode, setSortMode] = useState(SORT_MODES.desc);
  const [limit, setLimit] = useState(6);
  const [startAfter, setStartAfter] = useState(null);
  const sort = `${sortParams}:${sortMode}`;
  const getQueryParams = () => {
    const baseObject = { sort, limit };
    if (collection) {
      baseObject.collection = collection;
    }
    if (categories) {
      baseObject.categories = categories;
    }
    if (startAfter) {
      baseObject.startAfter = startAfter;
    }
    return baseObject;
  };

  return {
    categories,
    collection,
    sortMode,
    sortParams,
    startAfter,
    limit,
    setCategories,
    setCollection,
    setSortParams,
    setSortMode,
    setStartAfter,
    getQueryParams,
  };
}

export default usePagination;
