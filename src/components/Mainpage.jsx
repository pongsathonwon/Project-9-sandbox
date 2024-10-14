import StarRating from "./StarRating";

const Mainpage = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Header Image Section */}
        <div className="relative">
          <img
            className="w-[1440px] h-[420px] object-cover bg-[url('assets/mainpage-photo/header-picture.png')]"
            alt="Header Image"
          />
        </div>

        {/* Collection Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Title & Description) */}
            <div className="h-[462px] flex-col justify-start items-start gap-6 inline-flex">
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
                Winter Collection. As temperatures drop, our curated selection
                of clothing is designed to keep you fashionably warm. From
                luxurious knitwear to trend-setting outerwear, each piece in our
                collection is a celebration of seasonal sophistication. Explore
                the blend of comfort and fashion, as we present you with the
                must-have ensembles to make a statement in the chilly months
                ahead. Welcome to a winter wardrobe that seamlessly combines
                coziness with chic aesthetics.
              </div>
            </div>
            {/* Right Column (Two Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cozy Breeze Card */}
              <div className="relative">
                <div className="h-[462px] p-4 bg-gradient-to-b from-black to-black flex-col justify-end items-center gap-4 inline-flex">
                  <div className="self-stretch h-8 text-center text-white text-2xl font-bold font-['Poppins'] leading-loose">
                    Cozy Breeze
                  </div>
                  <div className="self-stretch text-center text-white text-base font-normal font-['Poppins'] leading-tight">
                    {" "}
                    Embrace the season with our carefully curated selection of
                    garments, each piece thoughtfully designed to blend fashion
                    and functionality. From cozy knits to elegant outerwear, our
                    collection invites you to indulge in the allure of winter
                    fashion.{" "}
                  </div>
                  <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
                      View more
                    </div>
                  </div>
                </div>
              </div>
              {/* Flexi Move Card */}
              <div className="relative">
                <div className="h-[462px] p-4 bg-gradient-to-b from-black to-black flex-col justify-end items-center gap-4 inline-flex">
                  <div className="self-stretch h-8 text-center text-white text-2xl font-bold font-['Poppins'] leading-loose">
                    Flexi Move
                  </div>
                  <div className="self-stretch text-center text-white text-base font-normal font-['Poppins'] leading-tight">
                    Step into a world where fashion meets functionality with our
                    latest Sneaker Collection. Designed for those who appreciate
                    the perfect fusion of style and comfort, our curated
                    selection of sneakers is a celebration of urban chic.{" "}
                  </div>
                  <div className="h-[54px] px-2.5 py-[7px] bg-[#222222] justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
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
          <div className="w-[1192px] h-[537px] flex-col justify-center items-center gap-16 inline-flex">
            <div className="text-[#222222] text-[32px] font-bold font-['Poppins'] leading-[48px]">
              Featured Product
            </div>
            <div className="self-stretch justify-center items-start gap-10 inline-flex">
              <div className="w-[267px] flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="h-[267px] relative"
                  src="https://via.placeholder.com/267x267"
                />
                <div className="h-[34px] px-2.5 py-1 bg-[#ff000d] justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-base font-normal font-['Poppins'] leading-tight">
                    - 50%
                  </div>
                </div>
                <div className="self-stretch h-[142px] p-0.5 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                    Reyon Long Sleeve Shirt
                  </div>
                  <div className="self-stretch text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                    Elevate your winter style with our cozy flann...
                  </div>
                  <div className="justify-start items-start inline-flex">
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                  </div>
                  <div className="self-stretch justify-end items-center gap-4 inline-flex">
                    <div className="text-[#626262] text-sm font-normal font-['Poppins'] line-through leading-tight">
                      2,000
                    </div>
                    <div className="text-right text-[#ff000d] text-2xl font-bold font-['Poppins'] leading-loose">
                      THB 1,000
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[267px] flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="h-[267px] relative"
                  src="https://via.placeholder.com/267x267"
                />
                <div className="self-stretch h-[142px] p-0.5 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                    Pleated Camisole Dress Flor...
                  </div>
                  <div className="self-stretch text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                    Our versatile crossbody bag combines fashio...
                  </div>
                  <div className="justify-start items-start inline-flex">
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                  </div>
                  <div className="self-stretch justify-end items-center gap-4 inline-flex">
                    <div className="text-right text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                      THB 1,600
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[267px] flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="h-[267px] relative"
                  src="https://via.placeholder.com/267x267"
                />
                <div className="self-stretch h-[142px] p-0.5 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                    Washable Milano Ribbed Cr...
                  </div>
                  <div className="self-stretch text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                    Embrace coziness with our crafted from a so...
                  </div>
                  <div className="justify-start items-start inline-flex">
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                  </div>
                  <div className="self-stretch justify-end items-center gap-4 inline-flex">
                    <div className="text-right text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                      THB 1,200
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[267px] flex-col justify-start items-start gap-4 inline-flex">
                <img
                  className="h-[267px] relative"
                  src="https://via.placeholder.com/267x267"
                />
                <div className="self-stretch h-[142px] p-0.5 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                    Flexi Move Sneaker
                  </div>
                  <div className="self-stretch text-[#626262] text-base font-normal font-['Poppins'] leading-tight">
                    Step into comfort and style with our lightweig...
                  </div>
                  <div className="justify-start items-start inline-flex">
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                    <div className="w-[30px] h-[30px] pr-[13.28px] pt-[6.75px] pb-[7.23px] justify-start items-center flex">
                      <div className="w-[16.72px] h-4 relative"></div>
                    </div>
                  </div>
                  <div className="self-stretch justify-end items-center gap-4 inline-flex">
                    <div className="text-right text-[#222222] text-2xl font-bold font-['Poppins'] leading-loose">
                      THB 1,700.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mainpage;
