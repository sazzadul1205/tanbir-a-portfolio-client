import Cards from "../Home/Cards/Cards";
import MyServices from "../Home/MyServices/MyServices";
import GIFGallery from "./GIFGallery/GIFGallery";

const GIF = () => {
  return (
    <div>
      {/* GIF Gallery */}
      <GIFGallery />

      {/* My Services */}
      <MyServices id="my-services" />

      {/* Cards */}
      <Cards id="blogs" />
    </div>
  );
};

export default GIF;