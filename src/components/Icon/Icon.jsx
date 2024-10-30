import React from "react";

function Icon({ children, isShow }) {
  return (
    <div className="squre-group">
      {isShow && (
        <div className="w-1.5 aspect-square rounded-full bg-danger absolute z-10 translate-x-2 -translate-y-2"></div>
      )}
      {children}
    </div>
  );
}

export default Icon;
