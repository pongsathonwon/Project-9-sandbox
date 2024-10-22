import { createContext, useContext, useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";

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

  const [categories, setCategories] = useState(null);
  const [collection, setCollection] = useState(null);
  const [limit, setLimit] = useState(6);
  const [startAfter, setStartAfter] = useState(null);
  const [sortParams, setSortParams] = useState(SORT_PARAMS.ratings);
  const [sortMode, setSortMode] = useState(SORT_MODES.desc);
  const [max, setMax] = useState(0);
  // computed state
  const sort = genSortParams(sortMode, sortParams);
  const pageNumber = Math.ceil(max / limit);

  const loadProduct = async () => {
    setLoading();
    try {
      const {
        data,
        pagination: { total, nextCursor },
      } = await getData(PRODUCT_ENDPOINT, {
        params: { categories, collection, limit, startAfter, sort },
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
    loadProduct();
  }, []);
  // update state; change q sring => change pagination
  useEffect(() => {
    setMax(0);
  }, [collection, categories]);
  //update state; change sort => change startAfter
  useEffect(() => {
    setStartAfter(null);
  }, [sort, collection, categories]);
  return (
    <ClothingContext.Provider
      value={{
        data,
        isLoading,
        erorr,
        qurryParams,
      }}
    >
      {children}
    </ClothingContext.Provider>
  );
}

export default ClothingContextProvider;
