import React from "react";
import Dropdownbutt from "./Dropdownbutt";

function Dropdown({ setselectedProduct, selectedProduct }) {
  const [selectedQuantity, setselectedQuantity] = React.useState(1);
  const [toggle, setToggle] = React.useState(false);
  React.useEffect(() => {
    setselectedProduct((prev) => ({ ...prev, quantity: selectedQuantity }));
  }, [selectedQuantity]);

  React.useEffect(() => {
    if (selectedProduct.quantity > selectedProduct.remains) {
      setselectedQuantity(1);
      setselectedProduct((prev) => ({ ...prev, quantity: 1 }));
    }
  }, [selectedProduct]);

  //console.log("Dropdown ", selectedProduct);
  return (
    <div
      className="w-full flex flex-col xl:w-[14rem] 2xl:w-[8.6875rem]"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className=" flex justify-between items-center px-[10px] py-[7px] border border-[#E1E1E1] focus:outline-none focus:border-[#C1CD00] active:border-[#C1CD00]"
        tabIndex={0}
      >
        <div className="">{selectedQuantity}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className={+toggle ? "transform rotate-180 duration-[300ms]" : ""}
        >
          <path
            d="M20.5876 22.5137L14.7446 16.6705C14.3848 16.3108 13.8028 16.3102 13.4442 16.6689C13.083 17.0301 13.0862 17.6098 13.4458 17.9693L19.9365 24.4601C19.9367 24.4604 19.9371 24.4606 19.9373 24.4609C19.9377 24.4612 19.9379 24.4614 19.9381 24.4618C20.1185 24.642 20.3533 24.7316 20.5879 24.7312C20.8231 24.7303 21.0578 24.6408 21.2369 24.4618C21.2372 24.4614 21.2375 24.4612 21.2377 24.4609C21.2381 24.4606 21.2383 24.4604 21.2385 24.4601L27.7296 17.9693C28.0893 17.6096 28.0898 17.0276 27.7312 16.6689C27.37 16.3077 26.7902 16.3109 26.4307 16.6705L20.5876 22.5137Z"
            fill="#222222"
          />
        </svg>
      </div>
      {toggle && (
        <div className="  w-full overflow-y-scroll h-[100px] bg-primary-50 translate-y-1">
          {Array.from({ length: selectedProduct.remains }, (_, i) => i + 1).map(
            (item) => (
              <Dropdownbutt
                key={item}
                setslectedQuantity={setselectedQuantity}
                setToggle={setToggle}
              >
                {item}
              </Dropdownbutt>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
