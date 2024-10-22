import React from "react";
import { useClothingContext } from "../context/ClothingContextProvider";
import { useParams } from "react-router-dom";

function Clothing() {
  const { data, setQuery } = useClothingContext();
  const { type } = useParams();
  const [cat, col] = type.split("&");
  setQuery(cat ?? null, col ?? null);
  console.table(data);
  return <div>Clothing</div>;
}

export default Clothing;
