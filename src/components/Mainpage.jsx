import React from "react";
import headerPicture from "../assets/mainpage-photo/header-picture.png"; // Import the image
import cozyImage from "../assets/mainpage-photo/Cozy.jpg"; // Import cozy image
import flexiImage from "../assets/mainpage-photo/Flexi.jpg"; // Import flexi image
import StarRating from "./StarRating"; // Import the StarRating component
import ContainerSlot from "./ContainerSlot";

const Mainpage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Image Section */}
      <div className="relative">
        <img
          className="w-[1920px] h-[420px] object-cover"
          src={headerPicture}
          alt="Header Image"
        />
      </div>

      {/* Collection Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column (Title & Description) */}
          <div className="h-[462px] flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#222222] text-8xl font-bold font-poppins leading-[116px]">
                2024
              </div>
              <div className="text-[#222222] text-5xl font-bold font-poppins leading-[72px]">
                Collection
              </div>
            </div>
            <div className="w-[363px] text-[#222222] text-base font-normal font-poppins leading-tight">
              Step into a world of winter elegance and style with our latest
              Winter Collection. As temperatures drop, our curated selection of
              clothing is designed to keep you fashionably warm. From luxurious
              knitwear to trend-setting outerwear, each piece in our collection
              is a celebration of seasonal sophistication. Explore the blend of
              comfort and fashion, as we present you with the must-have
              ensembles to make a statement in the chilly months ahead. Welcome
              to a winter wardrobe that seamlessly combines coziness with chic
              aesthetics.
            </div>
          </div>
          {/* Right Column (Two Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cozy Breeze Card */}
            <div className="relative">
              <img
                className="w-full h-[462px] object-cover rounded-lg"
                src={cozyImage}
                alt="Cozy Breeze"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end items-center gap-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.5%, rgba(0, 0, 0, 0.8) 100%)",
                }}
              >
                <div className="self-stretch h-8 text-center text-[#ffffffda] text-2xl font-bold font-poppins leading-loose">
                  Cozy Breeze
                </div>
                <div className="self-stretch text-center text-[#ffffffda] text-base font-normal font-poppins leading-tight">
                  Embrace the season with our carefully curated selection of
                  garments, each piece thoughtfully designed to blend fashion
                  and functionality. From cozy knits to elegant outerwear, our
                  collection invites you to indulge in the allure of winter
                  fashion.
                </div>
                <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] flex justify-center items-center gap-2">
                  <div className="text-[#ffffffda] text-base font-normal font-poppins leading-tight">
                    View more
                  </div>
                </div>
              </div>
            </div>
            {/* Flexi Move Card */}
            <div className="relative">
              <img
                className="w-full h-[462px] object-cover rounded-lg"
                src={flexiImage}
                alt="Flexi Move"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end items-center gap-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.5%, rgba(0, 0, 0, 0.8) 100%)",
                }}
              >
                <div className="self-stretch h-8 text-center text-[#ffffffda] text-2xl font-bold font-poppins leading-loose">
                  Flexi Move
                </div>
                <div className="self-stretch text-center text-[#ffffffda] text-base font-normal font-poppins leading-tight">
                  Step into a world where fashion meets functionality with our
                  latest Sneaker Collection. Designed for those who appreciate
                  the perfect fusion of style and comfort, our curated selection
                  of sneakers is a celebration of urban chic.
                </div>
                <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] flex justify-center items-center gap-2">
                  <div className="text-[#ffffffda] text-base font-normal font-poppins leading-tight">
                    View more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <ContainerSlot />
      </section>
    </div>
  );
};

export default Mainpage;
