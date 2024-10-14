import React from "react";

const POSITION = {
  start: "",
  center: "mx-auto",
};

function ContainerSlot({
  containerLabel,
  containerLabelPosition = "start",
  children,
}) {
  return (
    <div className="flex flex-col gap-16">
      <h5 className={`${POSITION[containerLabelPosition]} capitalize`}>
        {containerLabel}
      </h5>
      <div className="flex gap-10 overflow-x-auto">{children}</div>
    </div>
  );
}

export default ContainerSlot;
