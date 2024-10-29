import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("must be used in modal ctx");
  return ctx;
};

function ModalContextProvider({ children }) {
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState("modal say hi");

  const propsInit = {
    label: "do somthing",
    onClick: () => {},
  };

  const [leftProps, setLeftProps] = useState(propsInit);
  const [rightProps, setRightProps] = useState(propsInit);

  const setOpen = (newTitle, left) => {
    setTitle(newTitle);
    setLeftProps(left);
    setRightProps({ label: "close", onClick: () => setIsShow(false) });
    setIsShow(true);
  };
  return (
    <ModalContext.Provider
      value={{
        title,
        setTitle,
        isShow,
        setIsShow,
        setOpen,
        leftProps,
        rightProps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;