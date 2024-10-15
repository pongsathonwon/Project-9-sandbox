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
        modifiedVarient: {color: {color, colorCode}[], size: size[]}
        endpointResult: {remains, skuCode} || (size, color) => {remains, skuCode}
    }
*/

export const conbineExtractFn = (varients) => {
  const extractPossibleColor = varients.map(({ color, colorCode }) => ({
    color,
    colorCode,
  }));
  const extractPossibleSize = varients.map(({ size }) => size);
  return {
    color: extractPossibleColor,
    size: extractPossibleSize,
  };
};

export const filterProductAmount = (color, size) => (varients) => {
  const [{ remains, skuCode }] = varients
    .filter((varient) => varient.color === color && varient.size === size)
    .map(({ remains, skuCode }) => ({ remains, skuCode }));
  if (!remains || !skuCode) throw new Error("no requested product");
  return { remains, skuCode };
};
