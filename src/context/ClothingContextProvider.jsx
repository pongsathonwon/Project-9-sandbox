import { createContext, useContext, useEffect, useState } from "react";
import useBaseState from "../hooks/useBaseState";
import usePagination from "../hooks/usePagination";
import { getData } from "../utils/apiHandler";

const ClothingContext = createContext(null);

export const useClothingContext = () => {
  const ctx = useContext(ClothingContext);
  if (!ctx) throw new Error("no Colth context provider");
  return ctx;
};

function ClothingContextProvider({ children }) {
  const { data, setSuccess, setError, setLoading, isLoading } = useBaseState();
  const { pagination, setNext, setQuery, setSort } = usePagination();
  const [cursor, setCursor] = useState(null);
  const [max, setMax] = useState(0);
  const isLast = Math.ceil(max / pagination.limit);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setLoading();
      try {
        const raw = await getData("products", {
          params: pagination,
          signal: controller.signal,
        });
        const {
          data: resData,
          pagination: { total, nextCursor },
        } = raw;
        if (!pagination.next) {
          setSuccess(resData);
        } else {
          setSuccess([...data, ...resData]);
        }
        setMax(total);
        setCursor(nextCursor);
      } catch (error) {
        setError(error);
      }
    })();
    return () => controller.abort();
  }, [pagination]);
  return (
    <ClothingContext.Provider
      value={{
        data,
        isLoading,
        isLast,
        setQuery,
        setSort,
        setNext: () => setNext(cursor),
      }}
    >
      {children}
    </ClothingContext.Provider>
  );
}

export default ClothingContextProvider;
