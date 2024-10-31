export const navlist = [
  { label: "men", path: "all-men" },
  { label: "women", path: "all-ladies" },
  { label: "shirts", path: "men-shirts,ladies-shirts" },
  { label: "shoes", path: "men-shoes,ladies-shoes" },
  { label: "accessories", path: "men-accessories,ladies-accessories" },
];

export const genClothingList = (label) => `/clothing/${label}`;

export const secondaryNavlist = (primary) => {
  if (primary === "men" || primary === "women")
    return [
      {
        label: "all items",
        path: `all-${primary === "women" ? "ladies" : primary}`,
      },
      {
        label: "shirts",
        path: `${primary === "women" ? "ladies" : primary}-shirts`,
      },
      {
        label: "shoes",
        path: `${primary === "women" ? "ladies" : primary}-shoes`,
      },
      {
        label: "accessories",
        path: `${primary === "women" ? "ladies" : primary}-accessories`,
      },
    ];
  return [
    { label: "all items", path: `men-${primary},ladies-${primary}` },
    { label: `men ${primary}`, path: `men-${primary}` },
    { label: `women ${primary}`, path: `ladies-${primary}` },
  ];
};

export const tertiaryNavlist = (collectionPath) => {
  return navlist.map(({ label, path }) => ({
    label,
    path: `${path}&${collectionPath}`,
  }));
};
