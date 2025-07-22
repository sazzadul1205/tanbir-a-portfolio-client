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
    <section id={id} className="bg-white pt-10 md:pt-[76px]">
      {/* Title */}
      <h3 className="inter font-semibold text-3xl md:text-4xl text-center text-black">
        Tools & Technologies I Use
      </h3>

      {/* Sub Title */}
      <p className="inter text-base md:text-lg text-center text-black mt-2 max-w-2xl mx-auto px-4 pb-5 md:pb-[110px]">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Images */}
      <div className="relative w-full max-w-4xl mx-auto md:mt-28 ">
        {/* Primary Image */}
        <img
          src={Frame}
          alt="Frame"
          className="w-[682px] md:h-[512px] mx-auto object-contain"
        />

        {/* Icons Container */}
        <div className="absolute w-[823px] h-[406px] mx-auto inset-0 hidden md:flex">
          {/* HTML5 */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[100px] group cursor-pointer">
            <img
              src={HTML5}
              alt="HTML5"
              className="w-12 h-12 group-hover:animate-spin"
            />
          </div>
          {/* CSS */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[202px] left-[52px] group cursor-pointer">
            <img
              src={CSS}
              alt="CSS"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* Meta */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[292px] left-[122px] group cursor-pointer">
            <img
              src={Meta}
              alt="Meta"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* JS */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[352px] left-[212px] group cursor-pointer">
            <img
              src={JS}
              alt="JS"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* Adobe */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[392px] left-[322px] group cursor-pointer">
            <img
              src={Adobe}
              alt="Adobe"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* GWD */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[392px] right-[292px] group cursor-pointer">
            <img
              src={GWD}
              alt="GWD"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* Double */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[352px] right-[192px] group cursor-pointer">
            <img
              src={Double}
              alt="Double"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>

          {/* Midjourney */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[292px] right-[92px] group cursor-pointer">
            <img
              src={Midjourney}
              alt="Midjourney"
              className="w-10 h-10 group-hover:animate-spin"
            />
          </div>
          {/* AdRoll */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[192px] right-[22px] group cursor-pointer">
            <img
              src={AdRoll}
              alt="AdRoll"
              className="w-[71px] h-[11px] group-hover:animate-spin"
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
