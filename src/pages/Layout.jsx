import React from "react";
import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
