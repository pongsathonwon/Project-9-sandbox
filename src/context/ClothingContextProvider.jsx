import { createContext, useContext, useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";

const ClothingContext = createContext(null);
export const useClothingContext = () => {
  const ctx = useContext(ClothingContext);
  if (!ctx)
    throw new Error("useClothContext must be used in ColthContextProvider");
  return ctx;
};

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

  const [categories, setCategories] = useState(null);
  const [collection, setCollection] = useState(null);
  const [sortParams, setSortParams] = useState(SORT_PARAMS.ratings);
  const [sortMode, setSortMode] = useState(SORT_MODES.desc);
  const [limit, setLimit] = useState(6);
  const [startAfter, setStartAfter] = useState(null);
  const [curPage, setCurPage] = useState(0);
  const getQueryParams = () => {
    const sort = `${sortParams}:${sortMode}`;
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
    console.log(baseObject);
    return baseObject;
  };
  const currentParams = getQueryParams();

  const setQuery = (newCat = null, newCol = null) => {
    setCategories(newCat);
    setCollection(newCol);
  };
  // computed state
  const pageNumber = Math.ceil(max / limit);
  const isLastPage = pageNumber === curPage;

  const nextPage = () => {
    setStartAfter(cursor);
  };

  const setSort = (newSortParams, newSortMode) => {
    setSortParams(newSortParams);
    setSortMode(newSortMode);
  };

  const loadProduct = async (signal) => {
    setLoading();
    try {
      const {
        data: ResData,
        pagination: { total, nextCursor },
      } = await getData(PRODUCT_ENDPOINT, {
        params: currentParams,
        signal,
      });
      setSuccess(ResData);
      setCursor(nextCursor);
      setMax(total);
      setCurPage((p) => p + 1);
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
    setCurPage(0);
  }, [collection, categories]);
  //update state; change sort => change startAfter
  useEffect(() => {
    setStartAfter(null);
    setCurPage(0);
  }, [sortMode, sortParams, collection, categories]);
  return (
    <ClothingContext.Provider
      value={{
        data,
        sortMode,
        sortParams,
        isLoading,
        erorr,
        setQuery,
        nextPage,
        isLastPage,
      }}
    >
      {children}
    </ClothingContext.Provider>
  );
}

export default ClothingContextProvider;
