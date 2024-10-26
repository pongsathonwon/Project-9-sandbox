import React from "react";
import headerPicture from "../assets/header-picture.png"; // Import the image
import CollectionSection from "./CollectionSection"; // Import the CollectionSection component
import FeaturedProducts from "./FeaturedProducts"; // Import the FeaturedProducts component
import ContainerSlot from "./ContainerSlot";

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
      <ContainerSlot />
    </div>
  );
};

export default Mainpage;
