// Packages
import PropTypes from "prop-types";

// Assets
// import Midjourney from "../../../assets/Tools/Midjourney.png";
// import AdRoll from "../../../assets/Tools/AdRoll.png";
import Double from "../../../assets/Tools/Double.png";
import HTML5 from "../../../assets/Tools/HTML5.png";
import Frame from "../../../assets/Tools/Frame.png";
import Adobe from "../../../assets/Tools/Adobe.png";
import Meta from "../../../assets/Tools/Meta.png";
import CSS from "../../../assets/Tools/CSS.png";
import GWD from "../../../assets/Tools/GWD.png";
import JS from "../../../assets/Tools/JS.png";

import Midjourney from "../../../assets/Tool/Midjourney.svg";
import AdRoll from "../../../assets/Tool/AdRoll.svg";

const Tools = ({ id }) => {
  return (
    <section id={id} className="bg-white">
      {/* Title */}
      <h3 className="inter mx-auto font-semibold text-3xl md:text-[40px] text-center text-black pt-16 max-w-[90%] md:max-w-2xl">
        Tools & Technologies I Use
      </h3>

      {/* Sub Title */}
      <p className="inter mx-auto text-base md:text-lg text-center text-black pt-4 pb-4 md:pb-[210px] max-w-[90%] md:max-w-3xl">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Icons Container – Mobile Only */}
      <div className="grid grid-cols-3 justify-items-center gap-y-6 gap-x-4 mx-auto md:hidden">
        {/* Icon Item */}
        {[HTML5, CSS, Meta, JS, Adobe, GWD, Double, Midjourney, AdRoll].map(
          (icon, idx) => (
            <div
              key={idx}
              className="w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]"
            >
              <img
                src={icon}
                alt={`Tech-${idx}`}
                className={icon === AdRoll ? "w-[71px] h-[11px]" : "w-10 h-10"}
              />
            </div>
          )
        )}
      </div>

      {/* Images */}
      <div className="relative w-full max-w-4xl mx-auto ">
        {/* Primary Image */}
        <img
          src={Frame}
          alt="Frame"
          className="w-full max-w-[682px] h-auto mx-auto object-contain"
        />

        {/* Icons Container */}
        <div className="absolute w-[823px] h-[406px] mx-auto inset-0 hidden md:flex">
          {/* HTML5 */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[100px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={HTML5} alt="HTML5" className="w-12 h-12" />
          </div>

          {/* CSS */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[202px] left-[52px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={CSS} alt="CSS" className="w-10 h-10" />
          </div>

          {/* Meta */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[292px] left-[122px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={Meta} alt="Meta" className="w-10 h-10" />
          </div>

          {/* JS */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[352px] left-[212px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={JS} alt="JS" className="w-10 h-10" />
          </div>

          {/* Adobe */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[392px] left-[322px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={Adobe} alt="Adobe" className="w-10 h-10" />
          </div>

          {/* GWD */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[392px] right-[292px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={GWD} alt="GWD" className="w-10 h-10" />
          </div>

          {/* Double */}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full bottom-[352px] right-[192px] group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]">
            <img src={Double} alt="Double" className="w-10 h-10" />
          </div>

          {/* Midjourney */}
          <div className="absolute bottom-[292px] left-[652px] group cursor-pointer">
            <div className="bg-[#172C5C] rounded-full h-20 w-20 group-hover:w-[220px] transition-all duration-500 ease-in-out overflow-hidden flex items-center justify-end px-2 origin-left">
              <div className="flex items-center gap-2">
                <img
                  src={Midjourney}
                  alt="Midjourney"
                  className="w-[70px] h-[40px] flex-shrink-0"
                />
                <p className="text-white text-[12px] leading-4 hidden group-hover:block w-[120px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* AdRoll */}
          <div className="absolute bottom-[192px] left-[722px] group cursor-pointer">
            <div className="bg-[#172C5C] rounded-full h-20 w-20 group-hover:w-[220px] transition-all duration-500 ease-in-out overflow-hidden flex items-center justify-end px-2 origin-left">
              <div className="flex items-center gap-2">
                <img
                  src={AdRoll}
                  alt="AdRoll"
                  className="w-[71px] h-[11px] flex-shrink-0"
                />
                <p className="text-white text-[12px] leading-4 hidden group-hover:block w-[120px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
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
