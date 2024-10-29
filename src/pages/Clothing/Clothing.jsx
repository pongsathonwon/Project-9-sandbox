import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../../utils/apiHandler";
import SortDropdown from "./SortDropdown";
import ProductCard from "../../components/productCard";
import Sidebar from "./Sidebar";

function Clothing() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("default");
  const [category, setCategory] = useState("");
  const [collection, setCollection] = useState("");
  const [gender, setGender] = useState("men");

  const getPageTitle = (path) => {
    switch (path) {
      case "all-men":
        return "Men's Clothing";
      case "all-ladies":
        return "Women's Clothing";
      case "men-shirts":
        return "Men's Shirts";
      case "men-shoes":
        return "Men's Shoes";
      case "men-accessories":
        return "Men's Accessories";
      case "ladies-shirts":
        return "Women's Shirts";
      case "ladies-shoes":
        return "Women's Shoes";
      case "ladies-accessories":
        return "Women's Accessories";
      case "men-shirts,ladies-shirts":
        return "Shirts";
      case "men-shoes,ladies-shoes":
        return "Shoes";
      case "men-accessories,ladies-accessories":
        return "Accessories";
      default:
        return "Clothing";
    }
  };

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    const [cat, col] = lastSegment.split("&");
    setCategory(cat);
    setCollection(col || "");

    if (cat.includes("men")) {
      setGender("men");
    } else if (cat.includes("ladies")) {
      setGender("women");
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getData("products", {
          params: {
            categories: cat,
            ...(col && { collection: col }),
            matchAll: col ? true : false,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("ไม่สามารถโหลดข้อมูลสินค้าได้");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.pathname]);

  const sortProducts = (productsToSort) => {
    switch (sortOrder) {
      case "price-asc":
        return [...productsToSort].sort(
          (a, b) =>
            (a.promotionalPrice || a.price) - (b.promotionalPrice || b.price)
        );
      case "price-desc":
        return [...productsToSort].sort(
          (a, b) =>
            (b.promotionalPrice || b.price) - (a.promotionalPrice || a.price)
        );
      case "best-seller":
        return [...productsToSort].sort(
          (a, b) => (b.ratings || 0) - (a.ratings || 0)
        );
      default:
        return productsToSort;
    }
  };

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">{getPageTitle(category)}</h2>
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center max-w-7xl mx-auto">
          {loading && <div>กำลังโหลด...</div>}
          {error && <div className="text-red-500">{error}</div>}

          {!loading &&
            !error &&
            sortProducts(products).map((product) => (
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                promotionalPrice={product.promotionalPrice}
                imageUrl={product.imageUrls[0]}
                ratings={product.ratings}
                permalink={product.permalink}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clothing;
