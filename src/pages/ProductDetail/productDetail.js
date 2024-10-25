const getUniqueValue = (arr, key) => {
  if (!arr[0][key]) return [];
  return [...new Set(arr.map((item) => item[key]))];
};

const numberWithCommas = (x) => {
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const permalinks = [
  "accessories-abstratct-printed-scarf",
  "shoes-athletic-mesh-slip-on-sneakers",
  "men-accessories-backpacks",
  "men-accessories-baseball-caps",
  "men-accessories-belts",
  "shirts-boxy-tailored-jacket",
  "shoes-casual-sandals",
  "shoes-casual-strappy-flat-sandals",
  "shoes-chelsea-boots",
  "shoes-chic-suede-ankle-boots",
  "shirts-city-commuter-coat",
  "shirts-city-essentials-blazer",
  "accessories-classic-leather-crossbody-bag",
  "shirts-cotton-short-sleeve-dress",
  "shoes-derby-shoes",
  "shirts-duke-overcoat",
  "shoes-fashionable-high-top-canvas-sneakers",
  "shirts-fleece-turtleneck-long-sleeve-dress",
  "shirts-heritage-duffle",
  "accessories-hoop-earrings",
  "shirts-icon-denim-trucker",
  "shirts-iconic-tee",
  "shirts-linen-blend-shirt",
  "shoes-loafers",
];

const weight_size = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
  XXL: 6,
};


 function getWeightSize(size) {
    const regex = /^$/;
  if (regex.test(regex)) {
    return size;
  } else {
    return weight_size[size];
  }
 }


export { getUniqueValue, numberWithCommas, permalinks, getWeightSize};