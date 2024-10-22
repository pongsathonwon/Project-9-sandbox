import { createContext, useContext, useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";
import usePagination from "../hooks/usePagination";

const ClothingContext = createContext(null);

const PRODUCT_ENDPOINT = "products";

const SORT_PARAMS = {
  price: "price",
  name: "name",
  ratings: "ratings",
};

const SORT_MODES = {
  asc: "asc",
  desc: "desc",
};

const DEFUALT_SORT = `${SORT_PARAMS.ratings}:${SORT_MODES.desc}`;

const genSortParams = (sortMode, sortParams) =>
  `${SORT_PARAMS[sortParams]}:${SORT_MODES[sortMode]}`;

function ClothingContextProvider({ children }) {
  const { data, erorr, isLoading, setSuccess, setError, setLoading, setEmpty } =
    useBaseState();
  const [max, setMax] = useState(0);
  const [cursor, setCursor] = useState(null);

  const {
    getQueryParams,
    startAfter,
    setStartAfter,
    categories,
    setCategories,
    collection,
    setCollection,
    sortParams,
    setSortParams,
    sortMode,
    setSortMode,
  } = usePagination();
  const currentParams = getQueryParams();
  // computed state
  const pageNumber = Math.ceil(max / limit);

  const nextPage = () => {
    setStartAfter(cursor);
  };

  const setSort = (newSortParams, newSortMode) => {
    setSortParams(newSortParams);
    setSortMode(newSortMode);
  };

  const setQuery = (newCategories = null, newCollection = null) => {
    setCategories(newCategories);
    setCollection(newCollection);
  };

  const loadProduct = async (signal) => {
    setLoading();
    try {
      const {
        data,
        pagination: { total, nextCursor },
      } = await getData(PRODUCT_ENDPOINT, {
        params: currentParams,
        signal,
      });
      setSuccess(data);
      setStartAfter(nextCursor);
      setMax(total);
    } catch (error) {
      setError(erorr);
    }
  };
  // fetching useEffect
  useEffect(() => {
    if (!collection && !categories) return;
    const contoller = new AbortController();
    loadProduct(contoller.signal);
    return () => contoller.abort();
  }, [startAfter, categories, collection, sortParams, sortMode]);
  // update state; change q sring => change pagination
  useEffect(() => {
    setMax(0);
  }, [collection, categories]);
  //update state; change sort => change startAfter
  useEffect(() => {
    setStartAfter(null);
  }, [sortMode, sortParams, collection, categories]);
  return (
    <ClothingContext.Provider
      value={{
        data,
        max,
        currentParams,
        isLoading,
        erorr,
        setQuery,
        nextPage,
      }}
    >
      {children}
    </ClothingContext.Provider>
  );
}

export default ClothingContextProvider;
