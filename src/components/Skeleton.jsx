import React from "react";

const BG_COLOR = {
  light: "bg-secondary-300",
  base: "bg-secondary-500",
  dark: "bg-secondary-700",
};

function Skeleton({ bgColor = "base", style, className, children }) {
  return (
    <div
      style={{ ...style }}
      className={`animate-pulse ${className} ${BG_COLOR[bgColor]}`}
    >
      {children}
    </div>
  );
}

export default Skeleton;
