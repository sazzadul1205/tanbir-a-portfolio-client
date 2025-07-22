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
    <section id={id} className="bg-white py-10">
      {/* Title */}
      <h3 className="inter font-semibold text-3xl md:text-4xl text-center text-black">
        Tools & Technologies I Use
      </h3>

      {/* Sub Title */}
      <p className="inter text-base md:text-lg text-center text-black mt-2 max-w-xl mx-auto px-4">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Images */}
      <div className="relative w-full max-w-4xl mx-auto mt-8">
        {/* Primary Image */}
        <img src={Frame} alt="Frame" className="w-full h-auto object-contain" />

        {/* Icons Container */}
        <div className="absolute inset-0">
          {/* HTML5 */}
          <div className="absolute bg-[#172C5C] p-3 rounded-full bottom-1/3 left-4 sm:left-8 md:left-12 group cursor-pointer">
            <img
              src={HTML5}
              alt="HTML5"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:animate-bounce"
            />
          </div>

          {/* CSS */}
          <div className="absolute bg-[#172C5C] p-3 rounded-full bottom-1/2 left-8 sm:left-16 md:left-22 group cursor-pointer">
            <img
              src={CSS}
              alt="CSS"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 group-hover:animate-bounce"
            />
          </div>

          {/* Meta */}
          <div className="absolute bg-[#172C5C] p-3 rounded-full bottom-2/3 left-1/3 md:left-[160px] group cursor-pointer">
            <img
              src={Meta}
              alt="Meta"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 group-hover:animate-bounce"
            />
          </div>

          {/* JS */}
          <div className="absolute bg-[#172C5C] p-4 rounded-full bottom-3/4 left-1/2 md:left-[260px] group cursor-pointer">
            <img
              src={JS}
              alt="JS"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Adobe */}
          <div className="absolute bg-[#172C5C] p-4 rounded-full bottom-4/5 left-2/3 md:left-[380px] group cursor-pointer">
            <img
              src={Adobe}
              alt="Adobe"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:animate-bounce"
            />
          </div>

          {/* GWD */}
          <div className="absolute bg-[#172C5C] p-4 rounded-full bottom-4/5 right-2/3 md:right-[330px] group cursor-pointer">
            <img
              src={GWD}
              alt="GWD"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Double */}
          <div className="absolute bg-[#172C5C] p-4 rounded-full bottom-3/4 right-1/2 md:right-[220px] group cursor-pointer">
            <img
              src={Double}
              alt="Double"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:animate-bounce"
            />
          </div>

          {/* Midjourney */}
          <div className="absolute bg-[#172C5C] p-4 rounded-full bottom-2/3 right-1/3 md:right-[120px] group cursor-pointer">
            <img
              src={Midjourney}
              alt="Midjourney"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:animate-bounce"
            />
          </div>

          {/* AdRoll */}
          <div className="absolute bg-[#172C5C] px-1 py-8 rounded-full bottom-1/2 right-4 sm:right-8 md:right-12 group cursor-pointer">
            <img
              src={AdRoll}
              alt="AdRoll"
              className="w-16 h-4 sm:w-[71px] sm:h-[13px] group-hover:animate-bounce"
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
