import React from "react";

function Cross() {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12L28 28"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 12L12 28"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

export default Cross;
