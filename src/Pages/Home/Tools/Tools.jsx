// Packages
import PropTypes from "prop-types";

// Assets
import Midjourney from "../../../assets/Tools/Midjourney.png";
import AdRoll from "../../../assets/Tools/AdRoll.png";
import Double from "../../../assets/Tools/Double.png";
import HTML5 from "../../../assets/Tools/HTML5.png";
import Frame from "../../../assets/Tools/Frame.png";
import Adobe from "../../../assets/Tools/Adobe.png";
import Meta from "../../../assets/Tools/Meta.png";
import CSS from "../../../assets/Tools/CSS.png";
import GWD from "../../../assets/Tools/GWD.png";
import JS from "../../../assets/Tools/JS.png";

const Tools = ({ id }) => {
  return (
    <section id={id} className="bg-white">
      {/* Title */}
      <h3 className="inter font-semibold text-[40px] text-center text-black pt-10">
        Tools & Technologies I Use
      </h3>

      {/* Sub Title */}
      <p className="inter text-[18px] text-center text-black pt-2 max-w-xl mx-auto">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Images */}
      <div className="relative w-full flex justify-center items-center pt-24">
        {/* Primary Image */}
        <img src={Frame} alt="Frame" className="w-[600px] h-[500px] mx-auto" />

        {/* Icons */}
        <div className="absolute  w-4xl h-full mx-auto">
          {/* HTML5 Box */}
          <div className="absolute bottom-[230px] left-12 bg-[#172C5C] p-3 z-20 rounded-full group cursor-pointer">
            <img
              src={HTML5}
              alt="HTML5"
              className="w-16 h-16 group-hover:animate-bounce"
            />
          </div>

          {/* CSS Box */}
          <div className="absolute bottom-[350px] left-22 bg-[#172C5C] p-3 z-20 rounded-full group cursor-pointer">
            <img
              src={CSS}
              alt="CSS"
              className="w-14 h-14 group-hover:animate-bounce"
            />
          </div>

          {/* Meta Box */}
          <div className="absolute bottom-[440px] left-[160px] bg-[#172C5C] p-3 z-20 rounded-full group cursor-pointer">
            <img
              src={Meta}
              alt="Meta"
              className="w-14 h-14 group-hover:animate-bounce"
            />
          </div>

          {/* JS Box */}
          <div className="absolute bottom-[510px] left-[260px] bg-[#172C5C] p-4 z-20 rounded-full group cursor-pointer">
            <img
              src={JS}
              alt="JS"
              className="w-11 h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Adobe Box */}
          <div className="absolute bottom-[550px] left-[380px] bg-[#172C5C] p-4 z-20 rounded-full group cursor-pointer">
            <img
              src={Adobe}
              alt="Adobe"
              className="w-11 h-11 group-hover:animate-bounce"
            />
          </div>

          {/* GWD Box */}
          <div className="absolute bottom-[550px] right-[330px] bg-[#172C5C] p-4 z-20 rounded-full group cursor-pointer">
            <img
              src={GWD}
              alt="GWD"
              className="w-11 h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Double Box */}
          <div className="absolute bottom-[500px] right-[220px] bg-[#172C5C] p-4 z-20 rounded-full group cursor-pointer">
            <img
              src={Double}
              alt="Double"
              className="w-11 h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Midjourney Box */}
          <div className="absolute bottom-[430px] right-[120px] bg-[#172C5C] p-4 z-20 rounded-full group cursor-pointer">
            <img
              src={Midjourney}
              alt="Midjourney"
              className="w-11 h-11 group-hover:animate-bounce"
            />
          </div>

          {/* AdRoll Box */}
          <div className="absolute bottom-[330px] right-[50px] bg-[#172C5C] py-8 px-1 z-20 rounded-full group cursor-pointer">
            <img
              src={AdRoll}
              alt="AdRoll"
              className="w-[71px] h-[13px] group-hover:animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Tools.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Tools;
