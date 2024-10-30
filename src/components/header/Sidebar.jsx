import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { genClothingList, navlist, secondaryNavlist } from "./navlist";
import Arrow from "../Icon/Arrow";
import { useCollectionContext } from "../../context/CollectionContextProvider";
import Icon from "../Icon/Icon";
import Cross from "../Icon/Cross";

const ExpandableButton = ({ labelText, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <li aria-haspopup="listbox" className="relative w-full h-full">
      <button
        onClick={() => setOpen((p) => !p)}
        className="capitalize text-lg font-semibold w-full h-full text-start flex justify-between items-center"
      >
        {labelText}
        <Arrow direction={open ? "down" : "up"} />
      </button>
      <ul
        className={`${
          open ? "" : "scale-y-0 duration-300 origin-top"
        } flex flex-col gap-2 pt-2`}
      >
        {children}
      </ul>
    </li>
  );
};

function Sidebar({ isShow, onClick }) {
  const { possibleCollectionList } = useCollectionContext();
  const [secondary, setSecondary] = React.useState(null);
  const { type } = useParams();
  const [baseCat, baseCol] = type ? type.split("&") : [null, null];
  const navigate = useNavigate();
  const getCategoriesUrl = (categories = "") =>
    `clothing/${categories === "" ? "" : categories}${
      baseCol ? "&" + baseCol : ""
    }`;
  const getCollectionUrl = (collection = "") =>
    `clothing/${baseCat ?? ""}${collection === "" ? "" : "&" + collection}`;
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-50 flex transition-all duration-300 z-20 ${
        isShow ? "" : "-translate-x-full"
      }`}
    >
      <div className="bg-white rounded-r-2xl pt-5">
        <div className="h-full relative">
          {/* primary sidebar */}
          <div
            aria-haspopup="listbox"
            className={`absolute duration-300 h-screen ${
              secondary ? "-translate-x-full" : ""
            }`}
          >
            <div className="font-bold capitalize flex gap-8 items-center w-full px-8 h-12 text-lg">
              <NavLink to="/" className="text-lg flex-1">
                home
              </NavLink>
              <button
                onClick={onClick}
                className=" rounded-full overflow-hidden hover:bg-secondary-100"
              >
                <Icon>
                  <Cross />
                </Icon>
              </button>
            </div>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              {navlist.map(({ label, path }) => (
                <li className="w-64 flex items-center h-12" key={path}>
                  <button
                    onClick={() => {
                      navigate(genClothingList(path));
                      setSecondary(label);
                    }}
                    className="w-full h-full text-start capitalize"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* secondary sidebar */}
          <div
            aria-haspopup="listbox"
            className={`aboslute duration-300 h-screen ${
              secondary ? "" : "-translate-x-full"
            }`}
          >
            <div className="font-bold flex items-center w-full px-4 h-12 border-b border-secondary-300 text-2xl">
              <button
                className="flex gap-8 items-center flex-1 capitalize"
                onClick={() => setSecondary(null)}
                aria-haspopup=""
              >
                <Arrow direction="left" />
                {secondary}
              </button>
              <button
                onClick={onClick}
                className=" rounded-full overflow-hidden hover:bg-secondary-100 mr-4"
              >
                <Icon>
                  <Cross />
                </Icon>
              </button>
            </div>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              <li className="flex w-64 items-center justify-between text-lg font-semibold h-12">
                Categories
              </li>
              {secondaryNavlist(secondary)?.map(({ label, path }) => (
                <li key={path} className="listitem">
                  <NavLink
                    className={`flex w-64 h-12 items-center justify-between font-normal ${
                      type?.split("&")[0] === path ? "active" : ""
                    }`}
                    to={getCategoriesUrl(path)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <ExpandableButton labelText="Collections">
                {possibleCollectionList.map(({ label, path }) => (
                  <li key={path} className="listitem">
                    <NavLink
                      to={getCollectionUrl(path)}
                      className={`flex w-full h-12 items-center justify-between font-normal ${
                        type?.includes(path) ? "active" : ""
                      }`}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ExpandableButton>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="w-full h-full lg:hidden"
        onClick={onClick}
        aria-hidden
      ></button>
    </div>
  );
}

export default Sidebar;
