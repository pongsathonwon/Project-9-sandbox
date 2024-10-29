import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../components/Icon/Arrow";

const getContainerStyles = (disabled) => {
  const baseStyles = "relative w-full min-w-28 cursor-pointer";
  if (disabled) return `${baseStyles} opacity-50 cursor-not-allowed`;
  return baseStyles;
};

const getButtonStyles = (disabled) => {
  const baseStyles = `
    w-full px-4 py-2 
    flex items-center justify-between 
    border 
    transition-colors duration-200
    text-base
    focus:outline-none
    bg-white
  `;

  if (disabled) {
    return `${baseStyles} bg-seondary-500 border-secondary-500 text-secondary-500`;
  }

  return `${baseStyles} border-secondary-300`;
};

function SelectBox({
  value = "Select option",
  disabled = false,
  possible,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selctRef = useRef();
  useEffect(() => {
    const close = ({ target }) => {
      if (selctRef.current && !selctRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [selctRef]);
  return (
    <div tabIndex={0} ref={selctRef} className={getContainerStyles(disabled)}>
      <button
        type="button"
        className={getButtonStyles(disabled)}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={disabled ? "text-secondary-500" : "text-secondary-900"}
        >
          {value}
        </span>
        <Arrow direction={isOpen ? "up" : "down"} />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-secondary-300 rounded-md shadow-lg">
          <ul
            className="py-1 max-h-60 overflow-auto"
            style={{ scrollbarWidth: "thin" }}
            role="listbox"
          >
            {possible.map((p) => (
              <li
                key={p}
                className={`px-4 py-2 cursor-pointer ${
                  p === value
                    ? "bg-primary-50 text-black"
                    : "text-secondary-900 hover:bg-secondary-100"
                }`}
                role="option"
                onClick={() => {
                  onChange(p);
                  setIsOpen(false);
                }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectBox;
