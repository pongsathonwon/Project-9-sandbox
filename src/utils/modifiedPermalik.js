/*
    variants: {skuCode: string, color: string, size: sting, remains: number, colorCode: "#hex"}[]
    Modifiedvariants = 

    flow: http response getbypermalink => {
        id, name, 
        skuCode, >> not valid for http call 
        permalink, description, 
        price: number, promotionalPrice: number, 
        categories: string[], collection, rating: number, 
        imageUrls: sting[], variants:variants
    } => tranform => {
        id, name, description, 
        price, promotionalPrice, rating 
        categories, collection, imageUrls
        color: {color, colorCode}[], size: size[]
        endpointResult: (size, color) => {remains, skuCode}
    }
*/
// prevVariant = {
//   color: [
//     {color, colorCode}
//   ],
//   size: [xl m l],
//
// }
const reducerFn = (prevVariant, curvariant) => {
  const { colorMap, sizeMap } = prevVariant;
  const { color, colorCode, size } = curvariant;
  colorMap.set(color, { color, colorCode });
  const prevSize = sizeMap.get(color);
  console.info(prevSize);
  if (!prevSize) {
    sizeMap.set(color, [size]);
  } else {
    sizeMap.set(color, [...prevSize, size]);
  }
  return prevVariant;
};

const filterProductAmount = (variants) => (color, size) => {
  const filterResult = variants
    .filter((variant) => variant.color === color && variant.size === size)
    .map(({ remains, skuCode }) => ({ remains, skuCode }));
  if (filterResult.remains || filterResult.skuCode || filterResult.length === 0)
    throw new Error("no requested product");
  return { remains, skuCode };
};

export const transformer = (variants) => {
  const ColorMap = new Map();
  const SizeMap = new Map();
  const { colorMap, sizeMap } = variants.reduce(reducerFn, {
    colorMap: ColorMap,
    sizeMap: SizeMap,
  });
  const endpointResult = filterProductAmount(variants);
  return {
    color: colorMap,
    posibleColor: [...colorMap.keys()],
    possibleSize: (color) => sizeMap.get(color) ?? [],
    size: sizeMap,
    endpointResult,
  };
};
