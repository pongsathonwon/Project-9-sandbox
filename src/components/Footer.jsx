import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import useSubsciption from "../hooks/useSubsciption";
import { genClothingList, navlist } from "./header/navlist";

const Footer = () => {
  const { signIn } = useAuthContext();
  const { email, invalid, onChange, submit } = useSubsciption();
  // outter div
  return (
    <div className="flex flex-col items-center gap-4 pl-[1.125rem] pr-[1.125rem] p-6  bg-[#222] lg:px-32 lg:py-6 text-secondary-50">
      <div className="flex flex-col items-start gap-14 self-stretch lg:footer-content-lg ">
        {/* Featured product */}
        <div className="flex flex-col items-center gap-4 self-stretch lg:footer-subcontent-lg 2xl:footer-subcontent-2xl">
          <div className="text-white text-center font-['Poppins'] text-2xl font-bold leading-8">
            Featured product
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            {navlist.map(({ label, path }) => (
              <Link
                key={label}
                to={genClothingList(path)}
                className="capitalize text-white text-center font-['Poppins'] text-lg font-semibold leading-6"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        {/* Register with us */}
        <div className="flex flex-col items-center gap-4 self-stretch lg:footer-subcontent-lg 2xl:footer-subcontent-2xl">
          <div className="self-stretch text-white text-center font-['Poppins'] text-2xl font-bold leading-8 lg:text-left">
            Register with us
          </div>
          <div className="self-stretch text-white text-center font-['Poppins'] leading-5 font-light lg:text-left">
            Sign up now and get 20% off your first purchase!
          </div>
          <button
            onClick={signIn}
            className="flex justify-center items-center gap-2 pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] bg-secondary-50"
          >
            <div className="text-[#222] font-['Poppins'] leading-5 font">
              Sign up now
            </div>
            <div className="flex justify-center items-center pt-[0.5625rem] pb-[0.5625rem] pl-[0.5625rem] pr-[0.5625rem] w-10 h-10">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.181 0C5.28084 0 0.5 4.78084 0.5 10.681C0.5 16.5812 5.28084 21.3621 11.181 21.3621C17.0812 21.3621 21.862 16.5812 21.862 10.681C21.862 4.78084 17.0812 0 11.181 0ZM11.181 19.6531C6.23356 19.6531 2.20896 15.6285 2.20896 10.681C2.20896 5.73359 6.23356 1.70896 11.181 1.70896C16.1285 1.70896 20.1531 5.73359 20.1531 10.681C20.1531 15.6285 16.1285 19.6531 11.181 19.6531Z"
                  fill="#222222"
                />
                <path
                  d="M14.1548 10.0746L10.2754 6.19525C9.9422 5.862 9.3996 5.862 9.06634 6.19525C8.73309 6.5285 8.73309 7.0711 9.06634 7.40435L12.3475 10.6855L9.06634 13.9668C8.73309 14.3 8.73309 14.8426 9.06634 15.1758C9.23297 15.3425 9.45086 15.4279 9.66876 15.4279C9.88665 15.4279 10.1045 15.3425 10.2712 15.1758L14.1505 11.2965C14.3171 11.1299 14.4026 10.9077 14.4026 10.6898C14.4026 10.4634 14.3214 10.2412 14.1548 10.0746Z"
                  fill="#222222"
                />
              </svg>
            </div>
          </button>
        </div>
        {/* Customer services */}
        <div className="flex flex-col items-center gap-4 self-stretch lg:footer-subcontent-lg 2xl:footer-subcontent-2xl">
          <div className="self-stretch text-white text-center font-['Poppins'] text-2xl font-bold leading-8 lg:text-left">
            Customer services
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="self-stretch text-white text-center font-['Poppins'] font-light leading-5 lg:text-left">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </div>
            <div className="self-stretch text-white text-center font-['Poppins'] font-light leading-5 lg:text-left">
              Email: jane.doe@realmail.com
            </div>
          </div>
          <input
            value={email}
            onChange={onChange}
            className={`flex items-center self-stretch pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] border border-[#e1e1e1] text-[#9f9f9f] font-['Poppins'] ${
              invalid ? "outline-danger" : ""
            }`}
            placeholder="Enter your email"
            type="email"
          ></input>
          <button
            disabled={invalid}
            onClick={submit}
            className="flex justify-center items-center gap-2 pt-[0.4375rem] pb-[0.4375rem] px-2 h-[3.375rem] bg-[#def81c] text-[#222] font-['Poppins'] leading-5 hover:bg-primary-500 hover:text-secondary-900 active:text-primary-700 active:bg-secondary-900 disabled:bg-secondary-300 disabled:text-secondary-500"
          >
            Subscribe
          </button>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col items-center gap-1 self-stretch lg:footer-copyright-lg">
        <div className="self-stretch text-[#9f9f9f] text-center font-['Poppins'] text-xs">
          Copyright © 2024 All rights reserved for all contents.{" "}
        </div>
        <div className="flex justify-end items-center gap-2 h-[1.6875rem]">
          <div className="w-[4.375rem] text-[#9f9f9f] font-['Poppins'] text-xs">
            Powered By
          </div>
          <div className="logo_storefront flex items-center">
            <div className="w-[3.0625rem] h-[1.0625rem] bg-[url('assets/logo/Skooldio_logo.png')] bg-contain mr-2" />
            <svg
              width={2}
              height={19}
              viewBox="0 0 2 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.950195 0.945801V18.0543"
                stroke="#DEE2E6"
                strokeWidth="0.457369"
              />
            </svg>

            <div className="flex justify-center items-center w-[1.875rem] h-4 ml-2">
              <div className="flex-shrink-0 w-[1.875rem] h-4 bg-[url('assets/logo/Webdev_logo.png')] bg-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
