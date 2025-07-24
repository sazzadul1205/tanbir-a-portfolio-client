import PropTypes from "prop-types";
import Desktop from "../../../assets/Desktop.png";

const AboutMe = ({ id }) => {
  return (
    <section id={id} className="py-1 md:py-10 px-1 md:px-4">
      {/* Title */}
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold inter max-w-5xl text-center mx-auto leading-snug md:leading-tight">
        Motion Graphics & High-Impact
        <span className="overline decoration-[#2FA94C] decoration-2 sm:decoration-3 ml-1 sm:ml-2">
          Ad Creative
        </span>
        <br className="hidden sm:block" />
        for
        <span className="relative inline-block ml-1 sm:ml-2 custom-underline">
          Digital Marketing
        </span>{" "}
        Success
      </h4>

      {/* About Me */}
      <div className="py-8 max-w-3xl mx-auto text-center inter text-sm sm:text-base leading-relaxed">
        <p className="pt-2">
          Looking for motion graphics services that deliver fast, look stunning,
          and drive results?
        </p>
        <p className="pt-2">
          I help brands, agencies, and marketing teams bring their ideas to life
          with dynamic visuals, scroll-stopping ads, and compelling video
          content — all tailored for today’s top platforms.
        </p>
        <p className="pt-2">
          With years of hands-on experience in After Effects animation, HTML5
          banner design, and social media ad production, I specialize in
          creating digital campaigns that not only perform — they convert.
        </p>
        <p className="pt-2">
          Need it done fast? No problem. I deliver top-level creative with
          express turnaround — without sacrificing quality.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
        {/* Start Your Project */}
        <button className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full shadow hover:shadow-lg transition cursor-pointer">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
          <p className="text-sm font-semibold inter">Hire Me Now</p>
        </button>

        {/* WhatsApp Now */}
        <button className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full shadow hover:shadow-lg transition cursor-pointer">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
          <p className="text-sm font-semibold inter">WhatsApp Now</p>
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 mx-auto w-full md:max-w-7xl px-0 md:px-4">
        <img
          src={Desktop}
          alt="Desktop Visual"
          className="w-full md:max-w-[1200px] mx-auto rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

// Prop Validation
AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutMe;
