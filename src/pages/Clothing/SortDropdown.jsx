import React, { useState } from "react";

function SortDropdown({ sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "best-seller", label: "Best Seller" },
  ];

  // Desktop dropdown
  const DesktopDropdown = () => (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="hidden lg:block border rounded-md p-2"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  // Tablet/Mobile button and bottom sheet
  const TabletDropdown = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="border rounded-md px-4 py-2"
      >
        Sort by
      </button>

      {/* Bottom sheet overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Bottom sheet */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl p-4 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Sort by</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSortOrder(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left py-2 ${
                sortOrder === option.value ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mb-4">
      <DesktopDropdown />
      <TabletDropdown />
    </div>
  );
}

export default SortDropdown;
