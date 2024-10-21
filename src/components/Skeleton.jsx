import React from "react";

const BG_COLOR = {
  light: "bg-secondary-300",
  base: "bg-secondary-500",
  dark: "bg-secondary-700",
};

function Skeleton({
  bgColor = "base",
  style = { width: "50%", height: "52px" },
}) {
  return (
    <div style={{ width, height }} className={BG_COLOR[bgColor]}>
      Skeleton
    </div>
  );
}

export default Skeleton;
