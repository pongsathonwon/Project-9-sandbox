import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [mainPath, setMainPath] = useState("");

  // Configuration objects
  const MAIN_PATHS = {
    MEN: "all-men",
    WOMEN: "all-ladies",
    SHIRTS: "men-shirts,ladies-shirts",
    SHOES: "men-shoes,ladies-shoes",
    ACCESSORIES: "men-accessories,ladies-accessories",
  };

  const CATEGORIES = {
    [MAIN_PATHS.MEN]: [
      { label: "All Items", path: "/clothing/all-men" },
      { label: "Shirts", path: "/clothing/men-shirts" },
      { label: "Shoes", path: "/clothing/men-shoes" },
      { label: "Accessories", path: "/clothing/men-accessories" },
    ],
    [MAIN_PATHS.WOMEN]: [
      { label: "All Items", path: "/clothing/all-ladies" },
      { label: "Shirts", path: "/clothing/ladies-shirts" },
      { label: "Shoes", path: "/clothing/ladies-shoes" },
      { label: "Accessories", path: "/clothing/ladies-accessories" },
    ],
    DEFAULT: [
      { label: "Men's Clothing", path: "/clothing/all-men" },
      { label: "Women's Clothing", path: "/clothing/all-ladies" },
      { label: "Shirts", path: "/clothing/men-shirts,ladies-shirts" },
      { label: "Shoes", path: "/clothing/men-shoes,ladies-shoes" },
      {
        label: "Accessories",
        path: "/clothing/men-accessories,ladies-accessories",
      },
    ],
  };

  const COLLECTIONS = [
    { label: "Price Down", value: "price-down" },
    { label: "New Arrivals", value: "new-arrivals" },
  ];

  useEffect(() => {
    const path = location.pathname.replace("/clothing/", "");
    const [basePath] = path.split("&");

    if (Object.values(MAIN_PATHS).includes(basePath)) {
      setMainPath(basePath);
    }
  }, [location.pathname]);

  const getCurrentPath = () => {
    const path = location.pathname.replace("/clothing/", "");
    return path.split("&")[0];
  };

  const renderCategoryLinks = (categories) => {
    const currentFullPath = location.pathname;
    const [currentPath] = currentFullPath.split("&");

    return (
      <ul className="space-y-2">
        {categories.map(({ label, path }) => {
          const isActive = currentPath === path;

          return (
            <li key={path}>
              <Link
                to={path}
                style={{
                  display: "block",
                  padding: "10px",
                  fontSize: "0.875rem",
                  backgroundColor: isActive ? "#DEF81C" : "transparent",
                  color: isActive ? "inherit" : "inherit",
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderCategories = () => {
    // Combined categories (Shirts, Shoes, Accessories)
    if (Object.values(MAIN_PATHS).slice(2).includes(mainPath)) {
      const [menPath, ladiesPath] = mainPath.split(",");
      return renderCategoryLinks([
        { label: "All Items", path: `/clothing/${mainPath}` },
        { label: "Men", path: `/clothing/${menPath}` },
        { label: "Women", path: `/clothing/${ladiesPath}` },
      ]);
    }

    // Men's or Women's categories
    if (CATEGORIES[mainPath]) {
      return renderCategoryLinks(CATEGORIES[mainPath]);
    }

    // Default categories
    return renderCategoryLinks(CATEGORIES.DEFAULT);
  };

  const getCollectionUrl = (collection) => {
    const currentPath = getCurrentPath();
    return `/clothing/${currentPath}${collection ? `&${collection}` : ""}`;
  };

  return (
    <div className="hidden lg:block w-[280px] bg-white ml-32 mt-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          {renderCategories()}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Collections</h3>
          <ul className="space-y-2">
            {COLLECTIONS.map(({ label, value }) => {
              const collectionPath = getCollectionUrl(value);
              const isActive = location.pathname === collectionPath;

              return (
                <li key={value}>
                  <Link
                    to={collectionPath}
                    style={{
                      display: "block",
                      padding: "10px",
                      fontSize: "0.875rem",
                      backgroundColor: isActive ? "#DEF81C" : "transparent",
                      color: isActive ? "inherit" : "inherit",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
