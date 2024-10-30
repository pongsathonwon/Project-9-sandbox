import React from "react";
import headerPicture from "../assets/header-picture.png"; // Import the image
import CollectionSection from "./CollectionSection"; // Import the CollectionSection component
import FeaturedProducts from "./FeaturedProducts"; // Import the FeaturedProducts component
import ContainerSlot from "./ContainerSlot";

const Mainpage = () => {
  return (
    <>
      <div className="w-full h-auto relative bg-white">
        {/* Header Image Section */}
        <div className="w-full h-[420px] lg:h-full relative">
          <img
            className="w-full h-full object-cover "
            src={headerPicture}
            alt="Header Image"
          />
        </div>

        {/* Collection Section */}
        <CollectionSection />

        {/* Featured Products Section */}
        <section className="py-16 px-[1.125rem] lg:px-32 items-center">
          <ContainerSlot
            collection="new-arrivals"
            containerLabel="Feature Products"
            containerLabelPosition="center"
          />
        </section>
      </div>
    </>
  );
};

export default Mainpage;
