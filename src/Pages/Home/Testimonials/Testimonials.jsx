// Icons
import { FaArrowRight } from "react-icons/fa6";

// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// Assets
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";
import Avatar from "../../../assets/Testimonials/Avatar.jpeg";

// Function + Component
import CountUpOnView from "./CountUpOnView/CountUpOnView ";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto md:pt-20">
      <div className="flex flex-col md:flex-row  gap-4">
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

          {/* Image */}
          {/* <div className="bg-white py-1 px-6 flex items-center gap-3"> */}
          {/* Avatar */}
          {/* <div className="avatar avatar-online">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div> */}

          {/* Information */}
          {/* <div className="text-black">
              <h3 className="font-semibold text-lg">TANBIR A.</h3>
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div> */}
          {/* </div> */}

          <img src={Avatar} alt="Avatar Image" className="w-full h-auto" />
        </div>

        {/* Single Testimonial */}
        <div className="w-full md:w-3/4 relative">
          <div className="relative w-full">
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 animate-fade-slide">
              <div className="bg-white shadow-md relative w-full h-[181px] md:h-[381px] overflow-hidden">
                {/* Image */}
                <div className="w-full max-w-full">
                  <img
                    src="https://i.ibb.co/FLqg6rMP/Screenshot-1-1.png"
                    alt="Screenshot"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Arrow at top-right */}
                <>
                  {/* Arrow */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-[#0F172A] rounded-bl-2xl p-2">
                      <div className="bg-white p-2 md:p-4 rounded-full cursor-pointer relative transition-all duration-300 transform rotate-[-45deg] hover:rotate-0 z-50">
                        <FaArrowRight className="text-black text-md md:text-xl" />
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
                  <div className="absolute bottom-0 right-[86px] bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-3 pt-2 overflow-hidden">
                    <div className="flex gap-[10px] bg-white p-1 rounded-full " >

                      {/* Right Icon */}
                      <button className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300">
                        <BsArrowLeft className="text-white transition-colors duration-300 group-hover:text-[#33BD51]" />
                      </button>

                      {/* Left Icon */}
                      <button className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300">
                        <BsArrowRight className="text-white transition-colors duration-300 group-hover:text-[#33BD51]" />
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
      <div className="hidden md:flex flex-col md:flex-row gap-5 items-center justify-around pt-[250px] md:pt-8 p-24 md:pb-44">
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={1500}
            className="italianno-regular text-5xl"
          />
          <p>Project Completed</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={17}
            className="italianno-regular text-5xl"
          />
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={98}
            className="italianno-regular text-5xl"
          />
          <p>Client Satisfaction</p>
        </div>
      </div>

      {/* Good To Know - Mobile */}
      <div className="flex md:hidden flex-col gap-5 items-center justify-center px-4 py-20 pt-[260px] md:p-24 md:pb-44">
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={1500}
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

// Text formatter
// const formatTestimonial = (text, showMore, toggle) => {
//   const sentences = text.split(". ").filter(Boolean);
//   if (sentences.length === 0) return null;

//   const firstSentence = sentences[0].trim() + ".";
//   const rest = sentences
//     .slice(1)
//     .map((s) => (s.trim().endsWith(".") ? s.trim() : s.trim() + "."));

//   const displayed = showMore ? rest : rest.slice(0, 5);

//   return (
//     <div className="text-gray-600 text-md inter font-medium leading-6 mt-3">
//       <p className="font-bold pb-3">{firstSentence}</p>
//       {displayed.map((sentence, i) => (
//         <p key={i} className="mt-[1px]">
//           {sentence}
//         </p>
//       ))}
//       {!showMore && (
//         <button
//           className="mt-2 text-[#33BD51] underline text-sm"
//           onClick={toggle}
//         >
//           Show more
//         </button>
//       )}
//     </div>
//   );
// };

export default Testimonials;
