import React from "react";
import cozyImage from "../assets/cozy.jpg"; // Import cozy image
import flexiImage from "../assets/flexi.jpg"; // Import flexi image

const CollectionSection = () => {
  return (
    <section className="py-16">
      <div className="w-full flex flex-row justify-center items-center gap-16">
        {/* 2024 Collection) */}
        <div className="h-[458px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start flex">
            <div className="text-[#222222] text-8xl font-bold font-['Poppins'] leading-[116px]">
              2024
            </div>
            <div className="text-[#222222] text-5xl font-bold font-['Poppins'] leading-[72px]">
              Collection
            </div>
          </div>
          <div className="w-[363px] text-[#222222] text-base font-normal font-['Poppins'] leading-tight">
            Step into a world of winter elegance and style with our latest
            Winter Collection. As temperatures drop, our curated selection of
            clothing is designed to keep you fashionably warm. From luxurious
            knitwear to trend-setting outerwear, each piece in our collection is
            a celebration of seasonal sophistication. Explore the blend of
            comfort and fashion, as we present you with the must-have ensembles
            to make a statement in the chilly months ahead. Welcome to a winter
            wardrobe that seamlessly combines coziness with chic aesthetics.
          </div>
        </div>

        {/* Cozy Breeze Card */}
        <div className="relative w-[575px] h-[500px] p-4 bg-gradient-to-b from-black to-black flex-col justify-end items-center gap-4 inline-flex">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            src={cozyImage}
            alt="Cozy Breeze"
          />
          <div className="relative self-stretch h-8 text-center text-white text-2xl font-bold font-['Poppins'] leading-loose">
            Cozy Breeze
          </div>
          <div className="relative self-stretch text-center text-white text-base font-normal font-['Poppins'] leading-tight">
            Embrace the season with our carefully curated selection of garments,
            each piece thoughtfully designed to blend fashion and functionality.
            From cozy knits to elegant outerwear, our collection invites you to
            indulge in the allure of winter fashion.
          </div>
          <div className="relative h-[54px] px-2.5 py-[7px] bg-[#222222] justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
              View more
            </div>
          </div>
        </div>
        {/* Flexi Move Card */}
        <div className="relative w-[575px] h-[500px] p-4 bg-gradient-to-b from-black to-black flex-col justify-end items-center gap-4 inline-flex">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            src={flexiImage}
            alt="Flexi Move"
          />
          <div className="relative self-stretch h-8 text-center text-white text-2xl font-bold font-['Poppins'] leading-loose">
            Flexi Move
          </div>
          <div className="relative self-stretch text-center text-white text-base font-normal font-['Poppins'] leading-tight">
            Step into a world where fashion meets functionality with our latest
            Sneaker Collection. Designed for those who appreciate the perfect
            fusion of style and comfort, our curated selection of sneakers is a
            celebration of urban chic.
          </div>
          <div className="relative h-[54px] px-2.5 py-[7px] bg-[#222222] justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
              View more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
