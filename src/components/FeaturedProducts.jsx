import React from "react";
import StarRating from "./StarRating"; // Import the StarRating component

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <div className="text-[#222222] text-[32px] font-bold font-poppins leading-[48px]">
          Featured Product
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Product Card */}
          <div className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
            <img
              className="w-full h-[370px] object-cover rounded-t-lg"
              src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2FUnDdJrzuPcDCuLKRbfcD%2Fitems%2F1%2F_images%2FfW6yFojcmQfmc184NmWL-Frame%204189%20(3).png?alt=media&token=0e93f62f-8ef0-4b2a-8032-6fa9450611f9"
              alt="Product 1"
            />
            <div className="absolute top-2 right-2 h-[34px] px-2.5 py-1 bg-[#ff000d] flex justify-start items-center gap-2">
              <div className="text-white text-base font-normal font-poppins leading-tight">
                - 50%
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                Reyon Long Sleeve Shirt
              </div>
              <div className="text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                Elevate your winter style with our cozy flann...
              </div>
              <div className="flex justify-start items-center gap-2">
                <StarRating rating={4} />
              </div>
              <div className="w-full flex justify-end items-center gap-2">
                <div className="text-[#626262] text-sm font-normal font-poppins line-through leading-tight">
                  2,000
                </div>
                <div className="text-right text-[#ff000d] text-2xl font-bold font-poppins leading-loose">
                  THB 1,000
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other products */}
          <div className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
            <img
              className="w-full h-[370px] object-cover rounded-t-lg"
              src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2F4CjEGqDp3IGlnuRjRlOM%2Fitems%2F0%2F_images%2FWeswOkwknfjQ03d8dIaF-Frame%204189.png?alt=media&token=5a49e35e-81d7-4119-b225-eb3c9f812fbd"
              alt="Product 2"
            />
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                Pleated Camisole Dress Flor...
              </div>
              <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                Our versatile crossbody bag combines fashio...
              </div>
              <div className="flex justify-start items-center gap-2">
                <StarRating rating={4} />
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose ml-auto">
                  THB 1,600
                </div>
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
            <img
              className="w-full h-[370px] object-cover rounded-t-lg"
              src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2F4CjEGqDp3IGlnuRjRlOM%2Fitems%2F1%2F_images%2FxsnodQLHoesPjQHMKge3-Frame%204189%20(1).png?alt=media&token=12ff9180-e454-464f-8eec-4467c0cc089d"
              alt="Product 3"
            />
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                Washable Milano Ribbed Cr...
              </div>
              <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                Embrace coziness with our crafted from a so...
              </div>
              <div className="flex justify-start items-center gap-2">
                <StarRating rating={4} />
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose ml-auto">
                  THB 1,200
                </div>
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
            <img
              className="w-full h-[370px] object-cover rounded-t-lg"
              src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2FUnDdJrzuPcDCuLKRbfcD%2Fitems%2F0%2F_images%2FlgoHdaDtQciWWItYQ2iv-Frame%204189%20(2).png?alt=media&token=3a14f339-064c-40ca-bfc8-54170aec0ab1"
              alt="Product 4"
            />
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                Flexi Move Sneaker
              </div>
              <div className="text-[#626262] text-base font-normal font-poppins leading-tight">
                Step into comfort and style with our lightweig...
              </div>
              <div className="flex justify-start items-center gap-2">
                <StarRating rating={4} />
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-right text-[#222222] text-2xl font-bold font-poppins leading-loose ml-auto">
                  THB 1,700
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
