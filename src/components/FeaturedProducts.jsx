import React from "react";
import StarRating from "./StarRating"; // Import the StarRating component

const products = [
  {
    id: "COL0002",
    name: "Price Down",
    permalink: "price-down",
    description:
      "Prices are dropping faster than a hot potato! Don't miss these amazing deals on our hottest products. Major discounts for a limited time only.",
    items: [
      {
        title: "Pleated Camisole Dress (Floral)",
        description:
          "Our versatile crossbody bag combines fashion and function, offering ample storage space with multiple compartments and a chic, adjustable strap.",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2F4CjEGqDp3IGlnuRjRlOM%2Fitems%2F0%2F_images%2FWeswOkwknfjQ03d8dIaF-Frame%204189.png?alt=media&token=5a49e35e-81d7-4119-b225-eb3c9f812fbd",
        originalPrice: 2000,
        discountedPrice: 1000,
      },
      {
        title: "Washable Milano Ribbed Crew Neck Long Sleeve Sweater",
        description:
          "Embrace coziness with our crafted from a soft blend of materials and designed with a relaxed fit for a perfect blend of warmth and style.",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2F4CjEGqDp3IGlnuRjRlOM%2Fitems%2F1%2F_images%2FxsnodQLHoesPjQHMKge3-Frame%204189%20(1).png?alt=media&token=12ff9180-e454-464f-8eec-4467c0cc089d",
        originalPrice: 1500,
        discountedPrice: 1200,
      },
    ],
  },
  {
    id: "COL0001",
    name: "New Arrivals",
    permalink: "new-arrivals",
    description:
      "Fresh out of the box and into our store! Experience the latest offerings that are trendy, stylish, and top-quality. We've got new products hitting the shelves every week to satisfy your cravings.",
    items: [
      {
        title: "Flexi Move Sneaker",
        description:
          "Step into comfort and style with our lightweight, cushioned sneakers, featuring a breathable mesh upper and a durable rubber sole.",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2FUnDdJrzuPcDCuLKRbfcD%2Fitems%2F0%2F_images%2FlgoHdaDtQciWWItYQ2iv-Frame%204189%20(2).png?alt=media&token=3a14f339-064c-40ca-bfc8-54170aec0ab1",
        originalPrice: 1800,
        discountedPrice: 1500,
      },
      {
        title: "Cotton Belted Short Sleeve Dress",
        description:
          "Exude timeless elegance in our classic little rose dress, featuring a tasteful knee-length hem and a tailored silhouette.",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/collections%2FUnDdJrzuPcDCuLKRbfcD%2Fitems%2F1%2F_images%2FfW6yFojcmQfmc184NmWL-Frame%204189%20(3).png?alt=media&token=0e93f62f-8ef0-4b2a-8032-6fa9450611f9",
        originalPrice: 1600,
        discountedPrice: 1400,
      },
    ],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="w-full flex flex-col justify-center items-center gap-16">
        <div className="text-[#222222] text-[32px] font-bold font-poppins leading-[48px]">
          Featured Product
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) =>
            product.items.map((item, index) => (
              <div key={index} className="w-[267px] flex flex-col justify-start items-start gap-4 relative">
                <img
                  className="w-full h-[370px] object-cover rounded-t-lg"
                  src={item.imageUrl}
                  alt={item.title}
                />
                {index === 0 && (
                  <div className="absolute top-2 right-2 h-[34px] px-2.5 py-1 bg-[#ff000d] flex justify-start items-center gap-2">
                    <div className="text-white text-base font-normal font-poppins leading-tight">
                      - 50%
                    </div>
                  </div>
                )}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="text-[#222222] text-2xl font-bold font-poppins leading-loose">
                    {item.title}
                  </div>
                  <div className="text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                    {item.description}
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <StarRating rating={4} />
                  </div>
                  <div className="w-full flex justify-end items-center gap-2">
                    <div className="text-[#626262] text-sm font-normal font-poppins line-through leading-tight">
                      {item.originalPrice}
                    </div>
                    <div className="text-right text-[#ff000d] text-2xl font-bold font-poppins leading-loose">
                      THB {item.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;