/*
    varients: {skuCode: string, color: string, size: sting, remains: number, colorCode: "#hex"}[]
    field = skuCode | color | size | remains | colorCode
*/

const extractColor = ({ color, colorCode }) => ({ color, colorCode });
const extractOthers = (field) => (varient) => varient[field];

export const conbineExtractFn = (varients) => {
  const extractPossibleColor = varients.map(extractColor);
  const extractPossibleSize = varients.map(extractOthers("size"));
  const extractPossibleRemains = varients.map(extractOthers("remains"));
  return {
    color: extractPossibleColor,
    size: extractPossibleSize,
    remains: extractPossibleRemains,
  };
};
