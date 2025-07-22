import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";

const whyHireMeData = [
  {
    title: "Fast Delivery Without Compromise",
    description:
      "Tight schedule? No worries — I’m known for delivering motion graphics and banner ads under strict deadlines, while maintaining premium quality.",
    bgColor: "bg-white",
    textColor: "text-black",
    iconBg: "bg-[#0F172A]",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "From display ad campaigns to social video ads, I know what each platform needs and how to get your brand seen and remembered.",
    bgColor: "bg-[#172C5C]",
    textColor: "text-white",
    iconBg: "bg-[#0F172A]",
  },
  {
    title: "All-in-One Creative Partner",
    description:
      "From concepting and storyboarding to animation, editing, and post — I offer end-to-end motion design services.",
    bgColor: "bg-[#172C5C]",
    textColor: "text-white",
    iconBg: "bg-[#0F172A]",
  },
  {
    title: "Optimized for Engagement",
    description:
      "Everything I create is crafted with performance in mind. My motion design helps you increase ad engagement, reduce bounce rates, and improve ROI.",
    bgColor: "bg-white",
    textColor: "text-black",
    iconBg: "bg-[#0F172A]",
  },
];

const WhyHireMe = ({ id }) => {
  return (
    <section id={id} className="px-4 md:px-10">
      {/* Title */}
      <h3 className="inter font-semibold text-3xl md:text-4xl text-center text-white pt-10">
        Why Hire Me?
      </h3>

      {/* Sub Title */}
      <p className="inter text-base md:text-lg text-center text-white pt-2 max-w-xl mx-auto">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl mx-auto pt-10 pb-4">
        {whyHireMeData.map((item, index) => (
          <div
            key={index}
            className={`relative ${item.bgColor} ${item.textColor} p-5 md:p-6 rounded-md h-full`}
          >
            <h3 className="inter text-lg md:text-xl font-medium">
              {item.title}
            </h3>
            <p className="inter pt-2 text-sm md:text-base">
              {item.description}
            </p>

            {/* Icon */}
            <div className="absolute p-2 -right-4 -bottom-5 cursor-pointer">
              <div
                className={`border border-gray-300 p-3 md:p-4 rounded-full ${item.iconBg}`}
              >
                <FaArrowRight className="text-white text-base md:text-xl transition-transform duration-300 rotate-[-45deg] hover:rotate-0" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
        {/* Start Your Project */}
        <div className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full">
          <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2 animate-ping" />
          <p className="text-sm font-semibold inter">Hire Me Now</p>
        </div>

        {/* Whats App Now */}
        <div className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full">
          <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2 animate-ping" />
          <p className="text-sm font-semibold inter">WhatsApp Now</p>
        </div>
      </div>
    </section>
  );
};

WhyHireMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WhyHireMe;
