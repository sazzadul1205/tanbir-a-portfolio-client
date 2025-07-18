// Assets
import Icon from "../../../assets/Tools/Icon.png";
import Frame from "../../../assets/Tools/Frame.png";
import PropTypes from "prop-types";

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
      <div className="relative w-full flex justify-center items-center pt-28">
        {/* Primary Image */}
        <img src={Frame} alt="Frame" className="w-[600px] h-[500px] mx-auto" />

        {/* Secondary Image */}
        <img
          src={Icon}
          alt="Icon"
          className="absolute w-[800px] h-[400px] -translate-x-1/2 -translate-y-[55%] left-1/2 -bottom-8 z-10"
        />
      </div>
    </section>
  );
};

Tools.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Tools;
