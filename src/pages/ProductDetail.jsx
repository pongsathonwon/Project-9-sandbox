import React from "react";

const NextLeft = ({ moveleft }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      className="absolute top-1/2 left-2 transform -translate-y-1/2"
      onClick={moveleft}
    >
      <circle opacity="0.3" cx="15.4262" cy="15.5356" r="15.391" fill="white" />
      <path
        d="M13.7991 15.9708L18.2958 20.4672C18.5726 20.7441 18.573 21.192 18.297 21.468C18.0191 21.7459 17.573 21.7435 17.2963 21.4668L12.3013 16.4718C12.301 16.4716 12.3009 16.4714 12.3007 16.4712C12.3004 16.4709 12.3003 16.4707 12.3 16.4706C12.1613 16.3318 12.0924 16.1511 12.0926 15.9706C12.0933 15.7895 12.1623 15.6089 12.3 15.4711C12.3003 15.4709 12.3004 15.4706 12.3007 15.4704C12.3009 15.4702 12.301 15.47 12.3013 15.4698L17.2963 10.4746C17.5731 10.1978 18.021 10.1974 18.297 10.4734C18.575 10.7514 18.5725 11.1975 18.2958 11.4742L13.7991 15.9708Z"
        fill="#222222"
      />
    </svg>
  );
};

const NextRight = ({ moveright }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      className="absolute top-1/2 right-2 transform -translate-y-1/2"
      onClick={moveright}
    >
      <circle opacity="0.3" cx="15.4262" cy="15.5356" r="15.391" fill="white" />
      <path
        d="M17.1999 15.9708L12.7032 20.4672C12.4264 20.7441 12.426 21.192 12.702 21.468C12.9799 21.7459 13.426 21.7435 13.7027 21.4668L18.6977 16.4718C18.698 16.4716 18.6982 16.4714 18.6983 16.4712C18.6986 16.4709 18.6988 16.4707 18.699 16.4706C18.8377 16.3318 18.9066 16.1511 18.9064 15.9706C18.9057 15.7895 18.8368 15.6089 18.699 15.4711C18.6988 15.4709 18.6986 15.4706 18.6983 15.4704C18.6982 15.4702 18.698 15.47 18.6977 15.4698L13.7027 10.4746C13.426 10.1978 12.978 10.1974 12.702 10.4734C12.4241 10.7514 12.4265 11.1975 12.7032 11.4742L17.1999 15.9708Z"
        fill="#222222"
      />
    </svg>
  );
};

function ProductDetail() {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [productdetail, setProductDetail] = React.useState({
    id: "kb1yxnG2jd3pAEy225M5",
    name: "City Essentials Blazer",
    skuCode: "C01004",
    permalink: "shirts-city-essentials-blazer",
    description:
      "Elevate your style with our refined yet casual corduroy blazer. Crafted from premium cotton with a touch of stretch, this garment offers lasting comfort and shape retention. ",
    price: 1990,
    promotionalPrice: 1990,
    categories: ["all-men", "men-shirts"],
    collection: "new-arrivals",
    ratings: 3.9,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FleqIHZHqkP2HwWyAOA6B-full-length-of-stylish-young-man-in-jacket-looking-2023-11-27-04-50-28-utc.png?alt=media&token=4d0251a9-c7c3-4fbf-b70f-342629e80274",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FF3alR048c95gAUFAcQy9-full-length-of-stylish-man-in-autumn-outfit-touchi-2023-11-27-05-00-25-utc.png?alt=media&token=e32b2efa-e592-4b30-b7f7-5a697928599b",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FUFrtHPkICdjWRBx2p6yb-full-length-of-man-in-autumn-outfit-holding-paper-2023-11-27-05-23-41-utc.png?alt=media&token=4fcd5ec8-a9d5-4ca5-9cd5-55ff784f3948",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2Flu3wCjHLhEAsFo1Icyvh-full-length-of-smiling-man-in-autumn-outfit-sittin-2023-11-27-05-12-06-utc.png?alt=media&token=c5c277d7-de48-4680-8e03-812d99cb6a0b",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Fkb1yxnG2jd3pAEy225M5%2F_images%2FBqfHyqnV26GqYMnSBbbH-trendy-man-in-autumn-jacket-holding-backpack-and-c-2023-11-27-05-00-33-utc.png?alt=media&token=10e098e7-4fb5-461c-b89a-e8b6e457f64f",
    ],
    variants: [
      {
        skuCode: "C0100407",
        color: "Green",
        size: "M",
        remains: 15,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100404",
        color: "Khaki",
        size: "XL",
        remains: 12,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100410",
        color: "Black",
        size: "S",
        remains: 91,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100409",
        color: "Black",
        size: "L",
        remains: 94,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100411",
        color: "Black",
        size: "M",
        remains: 93,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100405",
        color: "Green",
        size: "L",
        remains: 58,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100402",
        color: "Khaki",
        size: "S",
        remains: 6,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100403",
        color: "Khaki",
        size: "M",
        remains: 86,
        colorCode: "#c3b091",
      },
      {
        skuCode: "C0100408",
        color: "Green",
        size: "XL",
        remains: 85,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100406",
        color: "Green",
        size: "S",
        remains: 14,
        colorCode: "#008000",
      },
      {
        skuCode: "C0100412",
        color: "Black",
        size: "XL",
        remains: 87,
        colorCode: "#000000",
      },
      {
        skuCode: "C0100401",
        color: "Khaki",
        size: "L",
        remains: 88,
        colorCode: "#c3b091",
      },
    ],
  });

  return (
    <div className=" px-4 pt-6  pb-24 flex justify-center">
      <div className="grid grid-cols-4 gap-y-4 gap-x-2 w-[21.4375rem]">
        <div className="w-full h-[21.4375rem] col-span-4 relative">
          <img
            src={productdetail.imageUrls[selectedImage]}
            alt="product"
            className="object-cover object-top  w-full h-full select-none"
          />
          <NextLeft
            moveleft={() => {
              // if the selected image is the first image, then set the selected image to the last image
              setSelectedImage(prev => {
                if (prev === 0) {
                  return productdetail.imageUrls.length - 1;
                }
                return prev - 1;
              });
            }}
          />
          <NextRight
            moveright={() => {
              // if the selected image is the last image, then set the selected image to the first image
              setSelectedImage((prev) => {
                if (prev === productdetail.imageUrls.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
          />
        </div>
        {productdetail.imageUrls.map((image, index) => {
          if (index !== selectedImage) {
            return (
              <div
                key={index}
                className="w-full h-[80px] col-span-1 bg-secondary-700"
                onClick={() => {
                  setSelectedImage(index);
                }}
              >
                <img
                  src={image}
                  alt="product"
                  className="object-cover object-top  w-full h-full"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProductDetail;
