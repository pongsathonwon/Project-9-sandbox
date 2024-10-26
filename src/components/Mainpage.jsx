import React from "react";
import headerPicture from "../assets/header-picture.png"; // Import the image
import CollectionSection from "./CollectionSection"; // Import the CollectionSection component
import FeaturedProducts from "./FeaturedProducts"; // Import the FeaturedProducts component

const Mainpage = () => {
  return (
    <div className="w-full h-auto relative bg-white">
      {/* Header Image Section */}
      <div className="w-full h-[420px] lg:h-[600px] relative">
        <img
          className="w-full h-full object-cover"
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
