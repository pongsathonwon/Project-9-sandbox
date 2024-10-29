import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Clothing from "./pages/Clothing.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CartsContextProvider from "./context/CartsContextProvider.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CollectionContextProvider from "./context/CollectionContextProvider.jsx";
import CategoryContextProvider from "./context/CategoryContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ModalContextProvider from "./context/ModalContextProvider.jsx";
import Wish from "./pages/wish/Wish.jsx";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/clothing/:type", element: <Clothing /> },
      { path: "/productdetail/:permalink", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wish", element: <Wish /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <CategoryContextProvider>
        <CollectionContextProvider>
          <CartsContextProvider>
            <ModalContextProvider>
              <RouterProvider router={ROUTES} />
            </ModalContextProvider>
          </CartsContextProvider>
        </CollectionContextProvider>
      </CategoryContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
