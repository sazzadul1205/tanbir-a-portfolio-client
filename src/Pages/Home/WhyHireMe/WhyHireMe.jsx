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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl mx-auto pt-10 pb-4 bg-[#0F172A]">
        {whyHireMeData.map((item, index) => (
          <div
            key={index}
            className={`relative ${item.bgColor} ${item.textColor} px-3.5 pt-5 pb-9 rounded-md h-full`}
          >
            <h3 className="inter text-[22px] font-medium">{item.title}</h3>
            <p className="inter pt-2 text-sm md:text-base pr-8">
              {item.description}
            </p>

            <div>
              {/* Icon */}
              <div className="absolute p-2 -right-2 -bottom-2 cursor-pointer">
                <div className="bg-[#0F172A] rounded-tl-2xl p-2">
                  <div className="bg-[#0F172A] border border-white p-3 rounded-full flex items-center justify-center cursor-pointer relative transition-all duration-300 transform rotate-[-45deg] hover:rotate-0 z-50">
                    <FaArrowRight className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Sticky Corner */}
              <div
                className={`WHM-sticky-corner bottom-0 right-[62px] ${item.bgColor} z-30`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0F172A"
                >
                  <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                </svg>
              </div>

              {/* Sticky Corner */}
              <div
                className={`WHM-sticky-corner bottom-[62px] right-0 ${item.bgColor} z-30`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0F172A"
                >
                  <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
        {/* Start Your Project */}
        <button className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full cursor-pointer">
          <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2 animate-ping" />
          <p className="text-sm font-semibold inter">Hire Me Now</p>
        </button>

        {/* Whats App Now */}
        <button className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full cursor-pointer">
          <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2 animate-ping" />
          <p className="text-sm font-semibold inter">WhatsApp Now</p>
        </button>
      </div>
    </section>
  );
};

WhyHireMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WhyHireMe;
