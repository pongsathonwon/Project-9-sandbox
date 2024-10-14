import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { genClothingList, navlist } from "./navlist";
import Arrow from "../Icon/Arrow";

const ListItem = ({ children }) => {
  return (
    <li className="h-12 w-64 flex items-center justify-between">{children}</li>
  );
};

const LayoutSidebar = ({ zIndex = "z-20", children }) => {
  return (
    <div className={`bg-white rounded-r-2xl pt-5 ${zIndex}`}>{children}</div>
  );
};

function Sidebar({ isShow, onClick }) {
  const navigate = useNavigate();
  const { type } = useParams();
  console.log(type);
  return (
    <div
      tabIndex={0}
      className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-50 flex transition-all duration-300 ${
        isShow ? "" : "-translate-x-full"
      }`}
      onClick={onClick}
    >
      {/* primary sidebar */}
      <LayoutSidebar>
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
        <div className=" bg-white z-20 rounded-r-2xl pt-5">
          <ul className="flex flex-col gap-2 text-lg font-semibold px-8 capitalize">
            {navlist.map((n) => (
              <ListItem key={n}>
                <Link
                  className="flex items-center justify-between w-full"
                  to={genClothingList(n)}
                >
                  {n} <Arrow direction="right" />
                </Link>
              </ListItem>
            ))}
          </ul>
        </div>
      </LayoutSidebar>
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
*/
}
