import React from "react";

function ContainerSlot({ containerLable, children }) {
  return (
    <div className="flex flex-col gap-16">
      <h5>{containerLable}</h5>
      <div className="flex gap-10 overflow-x-auto">{children}</div>
    </div>
  );
}

export default ContainerSlot;
