import React from "react";

const CollectionContext = React.createContext(null);

const useCollectionContext = () => {
  const ctx = React.useContext(CollectionContext);
  if (!ctx)
    throw new Error(
      "useCollectionContext must be used in CollectionContextProvider"
    );
  return ctx;
};

function CollectionContextProvider({ children }) {
  return (
    <CollectionContext.Provider value={{}}>
      {children}
    </CollectionContext.Provider>
  );
}

export default CollectionContextProvider;
