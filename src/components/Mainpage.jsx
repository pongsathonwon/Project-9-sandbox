import React from "react";
import headerPicture from "../assets/header-picture.png"; // Import the image
import CollectionSection from "./CollectionSection"; // Import the CollectionSection component
import FeaturedProducts from "./FeaturedProducts"; // Import the FeaturedProducts component

const Mainpage = () => {
  return (
    <div className="w-[1920px] h-[2314px] relative bg-white">
      {/* Header Image Section */}
      <div className="">
        <img
          className="max-w-full object-cover"
          src={headerPicture}
          alt="Header Image"
        />
      </div>

      {/* Collection Section */}
      <CollectionSection />

      {/* Featured Products Section */}
      <FeaturedProducts />
    </div>
  );
};

export default Mainpage;
