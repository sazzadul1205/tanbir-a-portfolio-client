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
    <section id={id}>
      {/* Title */}
      <h3 className="inter font-semibold text-[40px] text-center text-white pt-10">
        Why Hire Me?
      </h3>

      {/* Sub Title */}
      <p className="inter text-[18px] text-center text-white pt-2 max-w-xl mx-auto">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Content */}
      <div className="grid grid-cols-2 flex-col md:flex-row pt-10 gap-5 max-w-7xl mx-auto pb-4">
        {whyHireMeData.map((item, index) => (
          <div
            key={index}
            className={`relative ${item.bgColor} ${item.textColor} p-4 w-full h-[150px] rounded-md`}
          >
            <h3 className="inter text-[22px] font-medium">{item.title}</h3>
            <p className="inter pt-2 text-[16px]">{item.description}</p>

            {/* Icon */}
            <div className="absolute p-2 -right-2 -bottom-2 cursor-pointer">
              <div
                className={`border border-gray-300 p-4 rounded-full ${item.iconBg}`}
              >
                <FaArrowRight className="text-white text-xl transition-transform duration-300 rotate-[-45deg] hover:rotate-0" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center gap-3 pt-10">
        {/* Start Your Project */}
        <div className="flex items-center gap-2 bg-white text-black py-[8px] px-7 rounded-full">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
          <p className="text-sm font-semibold inter">Hire Me Now</p>
        </div>

        {/* Whats App Now */}
        <div className="flex items-center gap-2 bg-white text-black py-[8px] px-7 rounded-full">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
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
