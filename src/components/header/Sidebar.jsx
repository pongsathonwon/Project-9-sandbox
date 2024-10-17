import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { genClothingList, navlist, secondaryNavlist } from "./navlist";
import Arrow from "../Icon/Arrow";
import { useCategoryContext } from "../../context/CategoryContextProvider";
import { useCollectionContext } from "../../context/CollectionContextProvider";

const ListItem = ({ lsitLabel, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <li className="w-64 flex flex-col">
      <button
        onClick={() => setOpen((p) => !p)}
        className="h-12 flex justify-between items-center my-auto bg-white"
      >
        {lsitLabel} <Arrow direction={open ? "down" : "right"} />
      </button>
      <div
        className={`transition-all duration-300 ${
          open ? "" : "-translate-y-full scale-y-0 -z-10"
        }`}
      >
        {children}
      </div>
    </li>
  );
};

function Sidebar({ isShow, onClick }) {
  const { type } = useParams();
  console.log(type);
  const { possibleCategoryList } = useCategoryContext();
  console.table(possibleCategoryList);
  const { possibleList } = useCollectionContext();
  console.table(possibleList);
  const [secondary, setSecondary] = React.useState(null);
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-50 flex transition-all duration-300 ${
        isShow ? "" : "-translate-x-full"
      }`}
    >
      <div className="bg-white rounded-r-2xl pt-5 z-20">
        <div className="h-full relative">
          {/* primary sidebar */}
          <div
            className={`absolute duration-300 ${
              secondary ? "-translate-x-full" : ""
            }`}
          >
            <button
              className="font-bold capitalize flex gap-8 items-center w-full px-4 h-12 text-lg"
              onClick={onClick}
            >
              <span className="text-lg ml-4">home</span>
            </button>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              {navlist.map(({ label, path }) => (
                <li className="w-64 flex items-center h-12" key={path}>
                  <button onClick={() => setSecondary(label)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>
          {/* secondary sidebar */}
          <div
            className={`aboslute duration-300 ${
              secondary ? "" : "-translate-x-full"
            }`}
          >
            <button
              className={`font-bold capitalize flex gap-8 items-center w-full px-4 h-12 ${
                type ? "border-b border-secondary-300 text-2xl" : "text-lg"
              }`}
              onClick={() => setSecondary(null)}
            >
              <Arrow direction="left" />
              {secondary}
            </button>
            <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
              {secondaryNavlist(secondary)?.map(({ label, path }) => (
                <li key={path} className="listitem">
                  <NavLink
                    className="flex w-64 h-12 items-center justify-between"
                    to={genClothingList(path)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="w-full h-full" onClick={onClick} aria-hidden></button>
    </div>
  );
}

export default Sidebar;

{
  /*
          <button
          className={`font-bold capitalize flex gap-8 items-center w-full px-4 h-12 ${
            type ? "border-b border-secondary-300 text-2xl" : "text-lg"
          }`}
          onClick={onClick}
        >
          {type ? (
            <>
              <Arrow direction="left" />
              {type}
            </>
          ) : (
            <span className="text-lg ml-4">home</span>
          )}
        </button>

        /////////////////////////////////////////////

                  {type ? (
            <>
              <Arrow direction="left" />
              {navlist.find(({ path }) => path === type).label}
            </>
          ) : (
            <span className="text-lg ml-4">home</span>
          )}

          ///////////////////////////////
                          <Link
                  className="flex items-center justify-between w-full"
                  to={genClothingList(path)}
                >
                  {label} <Arrow direction="right" />
                </Link>

*/
}
