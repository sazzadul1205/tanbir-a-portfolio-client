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
    <section id={id} className="pb-10 px-4 text-white">
      {/* Title */}
      <h3 className="inter text-2xl sm:text-3xl md:text-4xl font-semibold text-center py-10">
        My Services Include
      </h3>

      {/* Services List */}
      <div className="max-w-7xl mx-auto flex flex-col">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border-y border-gray-300 py-6 px-4 sm:px-8 md:px-12"
          >
            {/* Icon */}
            <img
              src={service.icon}
              alt={service.title}
              className="w-10 h-10 shrink-0"
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
            <div className="self-end md:self-center mt-2 md:mt-0">
              <div className="border border-gray-300 p-3 rounded-full cursor-pointer transform transition-all duration-500 rotate-[-45deg] hover:rotate-0">
                <FaArrowRight className="text-lg sm:text-xl" />
              </div>
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
