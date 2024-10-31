import React, { useEffect, useRef } from "react";
import { useModalContext } from "../context/ModalContextProvider";

function GobalModal() {
  const {
    isShow,
    setIsShow,
    leftProps,
    rightProps,
    title,
    content,
    setContent,
  } = useModalContext();
  const modalRef = useRef(null);
  useEffect(() => {
    const close = ({ target }) => {
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsShow(false);
        setContent(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [modalRef]);
  return (
    <>
      {isShow && (
        <div className=" z-10 top-0 bottom-0 fixed w-[100vw] flex justify-center items-center bg-secondary-900 bg-opacity-80 animate-fateIn">
          <div
            ref={modalRef}
            className=" flex flex-col items-start gap-6 p-6 w-[21.4375rem] xl:w-[900px]  rounded-2xl bg-white"
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="text-[#222] font-['Poppins'] text-lg font-semibold leading-6 xl:font-bold xl:text-[24px]">
                {title}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
              <div className="frame_4240 flex flex-col items-start self-stretch">
                <div className="flex flex-col items-center gap-1 self-stretch xl:flex-row ">
                  {content}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch xl:flex-row ">
              <button
                onClick={() => {
                  leftProps.onClick();
                  setIsShow(false);
                  setContent(null);
                }}
                className="flex justify-center items-center gap-2 self-stretch pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] bg-[#222] text-white font-['Poppins'] leading-5 cursor-pointer xl:w-full"
              >
                {leftProps.label}
              </button>
              <button
                onClick={rightProps.onClick}
                className="flex justify-center items-center gap-2 self-stretch pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] border border-[#e1e1e1] bg-white text-[#222] font-['Poppins'] leading-5 cursor-pointer xl:w-full"
              >
                {rightProps.label}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GobalModal;
