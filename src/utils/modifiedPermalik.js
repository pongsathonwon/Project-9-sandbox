/*
    Varients: {skuCode: string, color: string, size: sting, remains: number, colorCode: "#hex"}[]
    ModifiedVarients = 

    flow: http response getbypermalink => {
        id, name, 
        skuCode, >> not valid for http call 
        permalink, description, 
        price: number, promotionalPrice: number, 
        categories: string[], collection, rating: number, 
        imageUrls: sting[], varients:Varients
    } => tranform => {
        id, name, description, 
        price, promotionalPrice, rating 
        categories, collection, imageUrls
        color: {color, colorCode}[], size: size[]
        endpointResult: (size, color) => {remains, skuCode}
    }
*/
// prevVarient = {
//   color: [
//     {color, colorCode}
//   ],
//   size: [xl m l],
//
// }
reducerFn = (prevVarient, curVarient) => {
  const { color, colorCode, size } = curVarient;
  prevVarient.modifiedVarint.color = [
    ...prevVarient.modifiedVarint.color,
    { color, colorCode },
  ];
  prevVarient.modifiedVarint.size = [...prevVarient.modifiedVarint.size, size];
  return prevVarient;
};

const filterProductAmount = (varients) => (color, size) => {
  const filterResult = varients
    .filter((varient) => varient.color === color && varient.size === size)
    .map(({ remains, skuCode }) => ({ remains, skuCode }));
  if (filterResult.remains || filterResult.skuCode || filterResult.length === 0)
    throw new Error("no requested product");
  return { remains, skuCode };
};

export const transformer = (varients) => {
  const { color, size } = varients.reduce(reducerFn, { color: [], size: [] });
  const endpointResult = filterProductAmount(varients);
  return { color, size, endpointResult };
};
