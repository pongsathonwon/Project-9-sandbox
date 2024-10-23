import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";

import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <Mainpage></Mainpage>
      <StarRating rating={3.8} />
    </>
  );
}

export default App;
