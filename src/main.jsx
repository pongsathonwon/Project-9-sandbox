import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Clothing from "./pages/Clothing.jsx";
import Cart from "./pages/Cart.jsx";
import CartsContextProvider from "./context/CartsContextProvider.jsx";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", children: <Home /> },
      { path: "/clothing/:type", children: <Clothing /> },
      { path: "/cart", children: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartsContextProvider>
      <RouterProvider router={ROUTES} />
    </CartsContextProvider>
  </StrictMode>
);
