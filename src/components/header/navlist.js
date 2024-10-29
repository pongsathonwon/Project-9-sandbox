export const navlist = [
  { label: "men", path: "all-men" },
  { label: "women", path: "all-ladies" },
  { label: "shirts", path: "men-shirts,ladies-shirts" },
  { label: "shoes", path: "men-shoes,ladies-shoes" },
  { label: "accessories", path: "men-accessories,ladies-accessories" },
];

export const genClothingList = (label) => `/clothing/${label}`;

export const secondaryNavlist = (priamry) => {
  if (priamry === "men" || priamry === "women")
    return [
      { label: "all items", path: `all-${priamry}` },
      { label: "shirts", path: `${priamry}-shirts` },
      { label: "shoes", path: `${priamry}-shoes` },
      { label: "accessories", path: `${priamry}-accessories` },
    ];
  return [
    { label: "all items", path: `men-${priamry},women-${priamry}` },
    { label: `men ${priamry}`, path: `men-${priamry}` },
    { label: `women ${priamry}`, path: `women-${priamry}` },
  ];
};

export const tertiaryNavlist = (collectionPath) => {
  return navlist.map(({ label, path }) => ({
    label,
    path: `${path}&${collectionPath}`,
  }));
};
