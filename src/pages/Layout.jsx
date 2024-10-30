import React from "react";
import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import GobalModal from "../components/GobalModal";

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
      <GobalModal />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
