import React from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";

const CollectionContext = React.createContext(null);

export const useCollectionContext = () => {
  const ctx = React.useContext(CollectionContext);
  if (!ctx)
    throw new Error(
      "useCollectionContext must be used in CollectionContextProvider"
    );
  return ctx;
};

function CollectionContextProvider({ children }) {
  const { data, erorr, isLoading, setError, setLoading, setSuccess } =
    useBaseState();
  React.useEffect(() => {
    setLoading();
    (async () => {
      try {
        const resData = await getData("collections");
        setSuccess(resData);
      } catch (error) {
        setError(erorr);
      }
    })();
  }, []);
  return (
    <CollectionContext.Provider
      value={{ collectionList: data, erorr, isLoading }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export default CollectionContextProvider;
