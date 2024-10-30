import React, { useState, useRef, useEffect } from "react";

// แยก component สำหรับ Desktop
function DesktopSortDropdown({ sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (value) => {
    if (value === sortOrder) {
      setSortOrder("");
    } else {
      setSortOrder(value);
    }
  };

  const options = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "best-seller", label: "Best Seller" },
  ];

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`border text-black font-medium text-left px-4 h-[54px] w-[124px] flex items-center justify-between ${
          sortOrder ? "border-[#C1CD00]" : "border-[#E1E1E1]"
        }`}
      >
        Sort by
        <svg
          className={`fill-current h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[235px] bg-white border border-[#E1E1E1]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="flex items-center p-[16px] w-full text-left text-gray-700 text-[16px]"
            >
              <span
                className={`w-5 h-5 mr-3 rounded-full border-2 flex items-center justify-center ${
                  sortOrder === option.value
                    ? "border-[#C1CD00]"
                    : "border-[#E1E1E1]"
                }`}
              >
                {sortOrder === option.value && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C1CD00]" />
                )}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// สร้าง component ใหม่สำหรับ Tablet
function TabletSortDropdown({ sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSortOrder, setTempSortOrder] = useState(sortOrder);

  useEffect(() => {
    setTempSortOrder(sortOrder);
  }, [sortOrder]);

  const handleOptionClick = (value) => {
    if (value === tempSortOrder) {
      setTempSortOrder("");
    } else {
      setTempSortOrder(value);
    }
  };

  const handleApply = () => {
    setSortOrder(tempSortOrder);
    setIsOpen(false);
  };

  const options = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "best-seller", label: "Best Seller" },
  ];

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden text-black font-semibold flex items-center justify-end pl-40 md:pl-[512px] pb-4"
    >
      Sort by
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="14"
        width="14"
        viewBox="0 0 512 512"
        className="ml-2"
      >
        <path
          fill="#000000"
          d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
        />
      </svg>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4">
            <div className="flex justify-between items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setTempSortOrder(sortOrder);
                }}
                className="text-[#3366FF] text-[16px] font-light"
              >
                Cancel
              </button>
              <h3 className="text-[18px] font-semibold">Sort by</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSortOrder("");
                  setIsOpen(false);
                }}
                className="text-[16px] text-[#3366FF] font-light"
                disabled={!sortOrder}
              >
                Reset
              </button>
            </div>
            {options.map((option) => (
              <button
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(option.value);
                }}
                className="flex items-center p-4 w-full text-left"
              >
                <span
                  className={`w-5 h-5 mr-3 rounded-full border-2 flex items-center justify-center ${
                    tempSortOrder === option.value
                      ? "border-[#C1CD00]"
                      : "border-[#E1E1E1]"
                  }`}
                >
                  {tempSortOrder === option.value && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C1CD00]" />
                  )}
                </span>
                <span className="font-light">{option.label}</span>
              </button>
            ))}

            <div className="mt-4 px-4 pb-4">
              <button
                onClick={handleApply}
                className="w-full bg-black text-white py-4 font-light"
                disabled={tempSortOrder === sortOrder}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}

// Main component ที่จะเลือกแสดง Desktop หรือ Tablet version
function SortDropdown(props) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSortDropdown {...props} />
      </div>
      <TabletSortDropdown {...props} />
    </>
  );
}

export default SortDropdown;
