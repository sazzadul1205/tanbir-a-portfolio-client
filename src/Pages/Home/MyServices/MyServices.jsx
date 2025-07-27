import { FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";

// Assets
import HTML5 from "../../../assets/Services/HTML5.png";
import Animation from "../../../assets/Services/Animation.png";
import Scientific from "../../../assets/Services/Scientific.png";
import SocialMedia from "../../../assets/Services/SocialMedia.png";
import MotionGraphics from "../../../assets/Services/MotionGraphics.png";

// Services Data
const services = [
  {
    icon: Animation,
    title: "Social Media Video Ads",
    desc: "I design and animate high-converting video ads for Facebook, Instagram, and LinkedIn, optimized for engagement and fast load times.",
  },
  {
    icon: HTML5,
    title: "HTML5 Display & Rich-Media Ads",
    desc: "Fully responsive, interactive HTML5 banner ads built for top ad platforms: Google Ads, DV360, DoubleClick, AdForm, Celtra, Sizmek (Amazon), Flashtalking, and more.",
  },
  {
    icon: SocialMedia,
    title: "Motion Graphics & Video Production",
    desc: "From explainer videos and product animations to kinetic typography and film title sequences — my work blends storytelling with visual clarity.",
  },
  {
    icon: MotionGraphics,
    title: "Scientific & Medical Animations",
    desc: "I simplify complex subjects through motion — ideal for biotech, medical, or academic communications.",
  },
  {
    icon: Scientific,
    title: "Animated UI Prototypes & SVGs",
    desc: "Using Lottie and Bodymovin, I animate clean SVG assets for web and mobile — enhancing your UI/UX with smooth micro-interactions.",
  },
];

const MyServices = ({ id }) => {
  return (
    <section id={id} className="pb-[101px] px-4 text-white">
      {/* Title */}
      <h3 className="inter text-[40px] font-semibold text-center pb-[106px]">
        My Services Include
      </h3>

      {/* Services List */}
      <div className="max-w-[1100px] mx-auto flex flex-col">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[45px] border-y border-gray-300 py-4 px-9"
          >
            {/* Icon */}
            <img
              src={service.icon}
              alt={service.title}
              className="w-[45px] h-[45px] shrink-0"
            />

            {/* Title */}
            <h3 className="inter font-bold text-lg sm:text-xl md:text-[20px] md:w-64">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-white md:text-[17px] flex-1">
              {service.desc}
            </p>

            {/* Bottom (Mobile) / Right (Desktop): Arrow */}
            <div
              className="border border-gray-300 w-[35px] h-[35px] rounded-full cursor-pointer flex items-center justify-center transform transition-all duration-500 rotate-[-45deg] hover:rotate-0"
              style={{ boxSizing: "border-box", padding: 0, margin: 0 }}
            >
              <FaArrowRight className="text-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

MyServices.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MyServices;
