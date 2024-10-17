import React from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";

const CategoryContext = React.createContext(null);

export const useCategoryContext = () => {
  const ctx = React.useContext(CategoryContext);
  if (!ctx)
    throw new Error(
      "useCategoryContext must be used in CategoryContextProvider"
    );
  return ctx;
};

function CategoryContextProvider({ childern }) {
  const { data, isLoading, erorr, setSuccess, setLoading, setError } =
    useBaseState();

  const possibleCategoryList =
    data?.map(({ name, permalink }) => ({ label: name, path: permalink })) ??
    [];
  React.useEffect(() => {
    setLoading();
    async () => {
      try {
        const resData = await getData("categories");
        setSuccess(resData);
      } catch (error) {
        setError(erorr);
      }
    };
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categoryList: data, erorr, isLoading, possibleCategoryList }}
    >
      {childern}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
