import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import GobalModal from "../components/GobalModal";

function Layout() {
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
