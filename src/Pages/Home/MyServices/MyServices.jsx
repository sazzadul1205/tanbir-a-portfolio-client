import PropTypes from "prop-types";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";

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
    title: "Social Media <br /> Video Ads",
    desc: "I design and animate high-converting video ads for Facebook, Instagram, and LinkedIn, optimized for engagement and fast load times.",
  },
  {
    icon: HTML5,
    title: "HTML5 Display & <br /> Rich-Media Ads",
    desc: "Fully responsive, interactive HTML5 banner ads built for top ad platforms: Google Ads, DV360, DoubleClick, AdForm, Celtra, Sizmek (Amazon), Flashtalking, and more.",
  },
  {
    icon: SocialMedia,
    title: "Motion Graphics & <br /> Video Production",
    desc: "From explainer videos and product animations to kinetic typography and film title sequences — my work blends storytelling with visual clarity.",
  },
  {
    icon: MotionGraphics,
    title: "Scientific & Medical <br /> Animations",
    desc: "I simplify complex subjects through motion — ideal for biotech, medical, or academic communications.",
  },
  {
    icon: Scientific,
    title: "Animated UI <br /> Prototypes & SVGs",
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
            className="relative group flex flex-col items-center md:flex-row md:items-center justify-center md:justify-between  md:gap-[45px] py-[15px] md:py-[27.5px] px-[36.5px] first:border-t first:border-gray-500 border-b border-gray-500 overflow-hidden"
          >
            {/* Animated Bottom Border */}
            <span className="pointer-events-none absolute bottom-0 left-0 h-[1px] bg-[#ffb539] w-0 group-hover:w-full transition-all duration-500 ease-in-out" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center justify-center md:justify-between w-full gap-[20px] md:gap-[45px]">
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title.replace(/<br\s*\/?>/gi, " ")}
                className="w-[45px] h-[45px]"
              />

              {/* Title */}
              <h3
                className="inter font-bold text-[23px] md:w-[264px] text-white hover:text-[#ddb166] transition-colors duration-300 cursor-pointer text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />

              {/* Description */}
              <p className="text-sm sm:text-white md:text-[17px] flex-1 cursor-default text-center md:text-left">
                {service.desc}
              </p>

              {/* Arrow Icon */}
              <div className="relative w-[47px] h-[47px] rounded-full border border-gray-500 group-hover:border-[#ddb166] transition-colors duration-300 overflow-hidden group cursor-pointer flex-shrink-0">
                {/* Original White Arrow */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%] group-hover:opacity-0">
                  <FaArrowRightLong className="text-md text-white rotate-[-45deg] transition-all duration-500" />
                </div>

                {/* Incoming Yellow Arrow */}
                <div className="absolute left-[-100%] bottom-[-100%] opacity-0 group-hover:left-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center w-full h-full">
                  <FaArrowRightLong className="text-md text-[#ddb166] rotate-[-45deg] transition-all duration-500" />
                </div>
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
