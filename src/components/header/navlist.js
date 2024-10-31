export const navlist = [
  { label: "men", path: "all-men" },
  { label: "women", path: "all-ladies" },
  { label: "shirts", path: "men-shirts,ladies-shirts" },
  { label: "shoes", path: "men-shoes,ladies-shoes" },
  { label: "accessories", path: "men-accessories,ladies-accessories" },
];

export const genClothingList = (label) => `/clothing/${label}`;

export const secondaryNavlist = (priamry) => {
  if (priamry === "men")
    return [
      { label: "all items", path: `all-${priamry}` },
      { label: "shirts", path: `${priamry}-shirts` },
      { label: "shoes", path: `${priamry}-shoes` },
      { label: "accessories", path: `${priamry}-accessories` },
    ];
  if (priamry === "women")
    return [
      { label: "all items", path: `all-ladies` },
      { label: "shirts", path: `ladies-shirts` },
      { label: "shoes", path: `ladies-shoes` },
      { label: "accessories", path: `ladies-accessories` },
    ];
  return [
    { label: "all items", path: `men-${priamry},ladies-${priamry}` },
    { label: `men ${priamry}`, path: `men-${priamry}` },
    { label: `women ${priamry}`, path: `ladies-${priamry}` },
  ];
};

export const tertiaryNavlist = (collectionPath) => {
  return navlist.map(({ label, path }) => ({
    label,
    path: `${path}&${collectionPath}`,
  }));
};

export const genLabel = (url = "") => {
  if (url.includes("accessories")) return "accessories";
  if (url.includes("shoes")) return "shoes";
  if (url.includes("shirts")) return "shirts";
  if (url.includes("men")) return "men";
  if (url.includes("ladies")) return "women";
  return "";
};
