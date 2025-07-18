import { FaArrowRight } from "react-icons/fa6";

// Assets
import HTML5 from "../../../assets/Services/HTML5.png";
import Animation from "../../../assets/Services/Animation.png";
import Scientific from "../../../assets/Services/Scientific.png";
import SocialMedia from "../../../assets/Services/SocialMedia.png";
import MotionGraphics from "../../../assets/Services/MotionGraphics.png";

// Prop Validation
import PropTypes from "prop-types";


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
    <section id={id} className="pb-10">
      {/* Title */}
      <h3 className="inter text-[40px] font-semibold text-center py-10">
        My Services Include
      </h3>

      {/* List */}
      <div className="max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex justify-between gap-11 items-center border-y border-gray-600 py-3 px-20"
          >
            <img src={service.icon} alt={service.title} className="w-11 h-11" />
            <h3 className="inter font-bold text-[23px] w-56">
              {service.title}
            </h3>
            <p className="w-[500px] text-lg inter">{service.desc}</p>
            <div className="border border-gray-300 p-4 rounded-full transition-transform duration-500 rotate-[-45deg] hover:rotate-0 cursor-pointer">
              <FaArrowRight className="text-xl" />
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
