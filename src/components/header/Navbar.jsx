import React from "react";
import { NavLink } from "react-router-dom";
import { genClothingList, navlist } from "./navlist";
import CartIcon from "../Icon/CartIcon";
import { useCartContext } from "../../context/CartsContextProvider";
import Icon from "../Icon/Icon";
import Profile from "../Icon/Profile";
import Heart from "../Icon/Heart";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useModalContext } from "../../context/ModalContextProvider";

function Navbar({ children }) {
  const { setOpen } = useModalContext();
  const { isEmptyCart } = useCartContext();
  const { account, signIn, logout, setIsShow } = useAuthContext();
  const leftProps = account
    ? {
        label: "logout",
        onClick: async () => {
          await logout();
        },
      }
    : {
        label: "sign in with google",
        onClick: async () => {
          await signIn();
        },
      };
  const loginLabel = account ? "logout" : "sign in";
  return (
    <nav className="bg-secondary px-4 py-2 sticky top-0 lg:px-32 z-10">
      <div className="flex items-center justify-between mx-auto">
        <div className="flex">
          <div className="flex items-center gap-2 md:gap-4 md:mr-10">
            {children}
            <NavLink
              className="text-lg font-semibold text-white flex gap-2 md:gap-4 items-center"
              to={"/"}
            >
              <img
                src="../src/assets/logo/storefront.png"
                alt="storefront-logo"
                className="w-[37px] aspect-square"
              />
              WDB
            </NavLink>
          </div>
          <ul className="hidden text-white gap-6 text-base items-center capitalize md:flex">
            {navlist.map(({ label, path }) => (
              <li className="navlink" key={path}>
                <NavLink to={genClothingList(path)}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* cart */}
        <div className="flex gap-1">
          <NavLink to={"/wish"}>
            <Icon>
              <Heart />
            </Icon>
          </NavLink>
          <button onClick={() => setOpen(loginLabel, leftProps)}>
            <Icon isShow={account}>
              <Profile />
            </Icon>
          </button>
          <NavLink to={"/cart"} className="squre-group text-white">
            <Icon isShow={!isEmptyCart}>
              <CartIcon />
            </Icon>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
