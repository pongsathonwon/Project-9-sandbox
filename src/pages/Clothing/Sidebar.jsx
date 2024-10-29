import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [mainPath, setMainPath] = useState("");

  // paths ที่ต้องการให้ sidebar เปลี่ยน
  const mainPaths = [
    "all-men",
    "all-ladies",
    "men-shirts,ladies-shirts",
    "men-shoes,ladies-shoes",
    "men-accessories,ladies-accessories",
  ];

  useEffect(() => {
    const path = location.pathname.replace("/clothing/", "");
    const [basePath] = path.split("&");

    // เปลี่ยน mainPath เฉพาะเมื่อคลิกที่ path หลัก
    if (mainPaths.includes(basePath)) {
      setMainPath(basePath);
    }
  }, [location.pathname]);

  const renderCategories = () => {
    if (mainPath === "all-men") {
      return (
        <ul className="space-y-2">
          <li>
            <Link to="/clothing/all-men">All Items</Link>
          </li>
          <li>
            <Link to="/clothing/men-shirts">Shirts</Link>
          </li>
          <li>
            <Link to="/clothing/men-shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/clothing/men-accessories">Accessories</Link>
          </li>
        </ul>
      );
    }

    if (mainPath === "all-ladies") {
      return (
        <ul className="space-y-2">
          <li>
            <Link to="/clothing/all-ladies">All Items</Link>
          </li>
          <li>
            <Link to="/clothing/ladies-shirts">Shirts</Link>
          </li>
          <li>
            <Link to="/clothing/ladies-shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/clothing/ladies-accessories">Accessories</Link>
          </li>
        </ul>
      );
    }

    if (
      [
        "men-shirts,ladies-shirts",
        "men-shoes,ladies-shoes",
        "men-accessories,ladies-accessories",
      ].includes(mainPath)
    ) {
      const [menPath, ladiesPath] = mainPath.split(",");
      return (
        <ul className="space-y-2">
          <li>
            <Link to={`/clothing/${mainPath}`}>All Items</Link>
          </li>
          <li>
            <Link to={`/clothing/${menPath}`}>Men</Link>
          </li>
          <li>
            <Link to={`/clothing/${ladiesPath}`}>Women</Link>
          </li>
        </ul>
      );
    }

    // Default categories
    return (
      <ul className="space-y-2">
        <li>
          <Link to="/clothing/all-men">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/clothing/all-ladies">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/clothing/men-shirts,ladies-shirts">Shirts</Link>
        </li>
        <li>
          <Link to="/clothing/men-shoes,ladies-shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/clothing/men-accessories,ladies-accessories">
            Accessories
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="hidden lg:block w-64 bg-white p-4 border-r">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          {renderCategories()}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Collections</h3>
          <ul className="space-y-2">
            <li>
              <Link to={`/clothing/${mainPath}&price-down`}>Price Down</Link>
            </li>
            <li>
              <Link to={`/clothing/${mainPath}&new-arrivals`}>
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
