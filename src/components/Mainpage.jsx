import React, { useEffect, useState } from "react";
import headerPicture from "../assets/mainpage-photo/header-picture.png"; // Import the image
import cozyImage from "../assets/mainpage-photo/Cozy.jpg"; // Import cozy image
import flexiImage from "../assets/mainpage-photo/Flexi.jpg"; // Import flexi image
import StarRating from "./StarRating"; // Import the StarRating component
import ContainerSlot from "./ContainerSlot";
import { useCollectionContext } from "../context/CollectionContextProvider";
import { Link } from "react-router-dom";

const CardMinor = ({ description, imageUrl, title, permalink }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-[462px] object-cover rounded-lg"
        src={imageUrl}
        alt={title}
      />
      <div
        className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end items-center gap-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.5%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <div className="self-stretch h-8 text-center text-[#ffffffda] text-2xl font-bold font-poppins leading-loose">
          {title}
        </div>
        <div className="self-stretch text-center text-[#ffffffda] text-base font-normal font-poppins leading-tight">
          {description}
        </div>
        <Link
          to={`/clothing/&${permalink}`}
          className="h-[54px] px-2.5 py-[7px] bg-[#222222] flex justify-center items-center gap-2"
        >
          <div className="text-[#ffffffda] text-base font-normal font-poppins leading-tight">
            View more
          </div>
        </Link>
      </div>
    </div>
  );
};

const Mainpage = () => {
  const { collectionList, isLoading } = useCollectionContext();

  if (isLoading || !collectionList) return <div>loading....</div>;
  const [page, setPage] = useState(0);
  const { name, description, items, permalink } = collectionList[1];
  useEffect(() => {
    const id = setInterval(() => {
      if (page > 1) {
        setPage(0);
      }
      setPage((p) => p + 1);
    }, 1 * 1000);
    return () => clearInterval(id);
  }, []);
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
                {name}
              </div>
            </div>
            <div className="w-[363px] text-[#222222] text-base font-normal font-poppins leading-tight">
              {description}
            </div>
          </div>
          {/* Right Column (Two Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(({ description, title, imageUrl }, i) => (
              <CardMinor
                key={i}
                {...{ description, title, imageUrl, permalink }}
              />
            ))}
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
