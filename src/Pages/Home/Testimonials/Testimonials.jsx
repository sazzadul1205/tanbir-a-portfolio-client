import { useEffect, useState } from "react";

// Icons
import { FaArrowRight } from "react-icons/fa6";

// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdElectricBolt, MdOutlineEdit } from "react-icons/md";

// Assets
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";

// Function + Component
import CountUpOnView from "./CountUpOnView/CountUpOnView ";

// Testimonials Assets
import feedback1 from "../../../assets/Testimonials/feedback-1.jpg";
import feedback2 from "../../../assets/Testimonials/feedback-2.jpg";
import feedback3 from "../../../assets/Testimonials/feedback-3.jpg";
import feedback4 from "../../../assets/Testimonials/feedback-4.jpg";

const Testimonials = () => {
  const feedbackImages = [feedback1, feedback2, feedback3, feedback4];
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isAnimating, setIsAnimating] = useState(false);

  // Manual navigation
  const handlePrev = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? feedbackImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === feedbackImages.length - 1 ? 0 : prev + 1
    );
  };

  // Slow auto-next
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === feedbackImages.length - 1 ? 0 : prev + 1
      );
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, [feedbackImages.length]);

  return (
    <div className="max-w-7xl mx-auto md:pt-20">
      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-[19px] ">
          {/* Title */}
          <h3 className="inter font-semibold bg-[#156E27] h-[100px] flex flex-col px-6 justify-center text-white">
            <span className="text-[20px]">WHAT CUSTOMER SAY</span>
            <span className="text-[22px]">ABOUT ME</span>
          </h3>

          {/* Up Work Icon */}
          <div className="bg-[#174153] h-[130px]">
            <img
              src={UpWorkICon}
              alt="Up Work Icon"
              className="w-[250px] h-[140px] mx-auto"
            />
          </div>

          {/* Avatar Image
          <img src={Avatar} alt="Avatar Image" className="w-full h-auto" /> */}

          {/* Avatar */}
          <div className="bg-white flex gap-3 items-center">
            {/* Avatar with Green Dot */}
            <div className="avatar p-2">
              <div className="w-24 relative overflow-visible">
                {/* Profile Image */}
                <img
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  className="rounded-full"
                />

                {/* Green Blinking Dot (top-left with white border) */}
                <span className="absolute top-1 left-1 block h-5 w-5 rounded-full bg-green-500 border-2 border-white animate-ping"></span>
                <span className="absolute top-1 left-1 block h-5 w-5 rounded-full bg-green-500 border-2 border-white"></span>

                {/* Edit Icon (bottom-right) */}
                <span className="absolute bottom-0 right-0 flex items-center justify-center p-[6px] rounded-full bg-white shadow-md border-2 border-green-700 cursor-pointer">
                  <MdOutlineEdit className="h-5 w-5 text-green-600" />
                </span>
              </div>
            </div>

            {/* Name & Location */}
            <div className="text-black pb-5">
              {/* Name */}
              <div className="flex gap-2 items-center">
                <h3 className="text-[30px] font-semibold">Tanbir A.</h3>
                <HiBadgeCheck className="text-[30px] text-blue-500" />
              </div>

              {/* Location */}
              <div className="flex text-gray-500 font-semibold gap-2 items-center">
                <IoLocationOutline className="text-[22px]" />
                <p>Dhaka, Bangladesh</p>
              </div>

              {/* Location */}
              <div className="flex text-gray-500 text-sm font-semibold gap-2 items-center">
                5:34 PM Local Time
              </div>

              <div className="flex gap-2 items-center text-xs font-semibold bg-[#f7f4fb] text-purple-900 mt-2 py-1 px-2 rounded-full w-[130px]">
                <MdElectricBolt /> <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Single Testimonial */}
        <div className="w-full md:w-3/4 relative">
          {/* Single Feedback */}
          <div className="relative w-full">
            {/* Feedback Card */}
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 animate-fade-slide">
              {/* Feedback Card */}
              <div className="bg-white shadow-md relative w-full h-[181px] md:h-[410px] overflow-hidden">
                {/* Fading Images (behind everything) */}
                <div className="relative w-full h-full z-0">
                  {feedbackImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Feedback ${index + 1}`}
                      className={`absolute inset-0 w-auto max-w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex
                          ? "opacity-100 z-0"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow at top-right */}
                <>
                  {/* Arrow */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-[#0F172A] rounded-bl-2xl p-2 group">
                      <div className="bg-white p-2 md:p-4 rounded-full cursor-pointer relative transition-all duration-300 transform rotate-[-45deg] hover:rotate-0 z-50">
                        <FaArrowRight className="text-black text-md md:text-xl group-hover:text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner top-0 right-10 md:right-15 bg-white z-30 ">
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
                  <div className="pbmit-sticky-corner top-10 md:top-15 right-0 bg-white z-30 ">
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
                </>

                <>
                  {/* Available Now */}
                  <div className="absolute bottom-0 right-[86px] bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-3 pt-2 overflow-hidden z-30">
                    <div className="flex gap-[10px] bg-white p-1 rounded-full ">
                      {/* Previous */}
                      <button
                        className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300"
                        onClick={handlePrev}
                      >
                        <BsArrowLeft className="text-white group-hover:text-[#33BD51]" />
                      </button>

                      {/* Next */}
                      <button
                        className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300"
                        onClick={handleNext}
                      >
                        <BsArrowRight className="text-white group-hover:text-[#33BD51]" />
                      </button>
                    </div>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner-bottom bottom-0 right-[20px] md:right-[56px] bg-white z-30 ">
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
                  <div className="pbmit-sticky-corner-bottom-2 bottom-0 right-[182px] md:right-[192px] bg-white z-30 ">
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
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Good To know - Desktop */}
      <div className="hidden md:flex flex-col md:flex-row gap-5 justify-around pt-[270px] md:py-20">
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={50}
            className="italianno-regular text-6xl"
          />
          <p>Project Completed</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={17}
            className="italianno-regular text-6xl"
          />
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={98}
            className="italianno-regular text-6xl"
          />
          <p>Client Satisfaction</p>
        </div>
      </div>

      {/* Good To Know - Mobile */}
      <div className="flex md:hidden flex-col gap-5 items-center justify-center px-4 py-20 pt-[260px] md:p-24 md:pb-44">
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={50}
            className="italianno-regular text-7xl"
          />
          <p className="text-lg">Project Completed</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={17}
            className="italianno-regular text-7xl"
          />
          <p className="text-lg">Years Of Experience</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={98}
            className="italianno-regular text-7xl"
          />
          <p className="text-lg">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
