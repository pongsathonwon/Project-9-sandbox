import React, { useEffect } from "react";
import { useClothingContext } from "../context/ClothingContextProvider";
import { useParams } from "react-router-dom";
import { extractLink } from "../components/header/navlist";

function Clothing() {
  const { type } = useParams();
  const { categories, collection } = extractLink(type);
  const { data, isLoading, isLast, setQuery, setNext, setSort } =
    useClothingContext();
  console.log(data);
  useEffect(() => {
    setQuery({ categories, collection });
  }, []);
  return <div>Clothing</div>;
}

export default Clothing;
