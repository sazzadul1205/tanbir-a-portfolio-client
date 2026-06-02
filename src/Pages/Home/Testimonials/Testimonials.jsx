import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

// Icons
import { FaArrowRight } from "react-icons/fa6";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

// Assets
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";
import Profile from "../../../assets/Profile.jpeg";
import feedback1 from "../../../assets/Testimonials/feedback-1.jpg";
import feedback2 from "../../../assets/Testimonials/feedback-2.jpg";
import feedback3 from "../../../assets/Testimonials/feedback-3.jpg";
import feedback4 from "../../../assets/Testimonials/feedback-4.jpg";

// Function + Component
import CountUpOnView from "./CountUpOnView/CountUpOnView ";

const Testimonials = ({ id }) => {

  // Data
  const feedbackImages = useMemo(
    () => [feedback1, feedback2, feedback3, feedback4],
    []
  );

  // States
  const [setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [upWorkIconLoaded, setUpWorkIconLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    // Preload profile image
    const profileImg = new Image();
    profileImg.src = Profile;
    profileImg.onload = () => setProfileLoaded(true);

    // Preload UpWork icon
    const upWorkImg = new Image();
    upWorkImg.src = UpWorkICon;
    upWorkImg.onload = () => setUpWorkIconLoaded(true);

    // Preload all feedback images
    feedbackImages.forEach((img, index) => {
      const imageObj = new Image();
      imageObj.src = img;
      imageObj.onload = () => {
        setLoadedImages((prev) => ({
          ...prev,
          [index]: true,
        }));
      };
    });
  }, [feedbackImages]);

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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === feedbackImages.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [feedbackImages.length, setIsAnimating]);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tanbir Ahmed",
    "description": "Professional motion graphics designer and creative specialist on UpWork",
    "jobTitle": "Motion Graphics Designer & Ad Creative Specialist",
    "image": Profile,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "98",
      "bestRating": "100",
      "ratingCount": "50",
      "reviewCount": "50"
    },
    "knowsAbout": [
      "Motion Graphics",
      "HTML5 Banner Design",
      "Social Media Advertising",
      "Video Production"
    ],
    "availableAtOrFrom": {
      "@type": "Place",
      "name": "UpWork",
      "url": "https://www.upwork.com/freelancers/tanbirahmed2"
    }
  };

  return (
    <section id={id || "testimonials"} className="max-w-7xl mx-auto md:pt-20">
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-[19px]">
          {/* Title */}
          <h3 className="inter font-semibold bg-[#156E27] h-[100px] flex flex-col px-6 justify-center text-white">
            <span className="text-[20px]">WHAT CUSTOMER SAY</span>
            <span className="text-[22px]">ABOUT ME</span>
          </h3>

          {/* Up Work Icon with loading state */}
          <div className="bg-[#174153] h-[130px] relative">
            {!upWorkIconLoaded && (
              <div className="absolute inset-0 bg-[#1a4a5e] animate-pulse rounded" />
            )}
            <img
              src={UpWorkICon}
              alt="UpWork Platform"
              className={`w-[250px] h-[140px] mx-auto transition-opacity duration-300 ${upWorkIconLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              loading="lazy"
              onLoad={() => setUpWorkIconLoaded(true)}
            />
          </div>

          {/* Avatar */}
          <div className="bg-white flex gap-3 items-center">
            {/* Avatar with Green Dot */}
            <div className="avatar p-2">
              <div className="w-24 relative overflow-visible">
                {/* Profile Image with loading state */}
                <div className="relative">
                  {!profileLoaded && (
                    <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse" />
                  )}
                  <img
                    src={Profile}
                    alt="Tanbir Ahmed - Motion Graphics Designer"
                    className={`rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    loading="lazy"
                    onLoad={() => setProfileLoaded(true)}
                  />
                </div>

                {/* Green Blinking Dot (top-left with white border) */}
                <span className="absolute top-1 left-1 block h-5 w-5 rounded-full bg-green-500 border-2 border-white animate-ping" aria-hidden="true"></span>
                <span className="absolute top-1 left-1 block h-5 w-5 rounded-full bg-green-500 border-2 border-white" aria-label="Online status"></span>
              </div>
            </div>

            {/* Name & Location */}
            <div className="text-black pb-5">
              {/* Name */}
              <div className="flex gap-2 items-center">
                <h3 className="text-[30px] font-semibold">Tanbir A.</h3>
                <HiBadgeCheck className="text-[30px] text-blue-500" aria-label="Verified badge" />
              </div>

              {/* Location */}
              <div className="flex text-gray-500 font-semibold gap-2 items-center">
                <IoLocationOutline className="text-[22px]" aria-hidden="true" />
                <p>Dhaka, Bangladesh</p>
              </div>

              {/* Local Time */}
              <div className="flex text-gray-500 text-sm font-semibold gap-2 items-center">
                5:34 PM Local Time
              </div>

              {/* Availability Badge */}
              <div className="flex gap-2 items-center text-xs font-semibold bg-[#f7f4fb] text-purple-900 mt-2 py-1 px-2 rounded-full w-[130px]">
                <MdElectricBolt aria-hidden="true" /> <span>Available Now</span>
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
                {/* Fading Images with loading states */}
                <div className="relative w-full h-full z-0">
                  {feedbackImages.map((img, index) => (
                    <div key={index} className="relative w-full h-full">
                      {/* Skeleton loader */}
                      {!loadedImages[index] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <span className="text-gray-400">Loading...</span>
                        </div>
                      )}

                      {/* Actual image */}
                      <img
                        src={img}
                        alt={`Client feedback ${index + 1}`}
                        className={`absolute inset-0 w-auto max-w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${index === currentIndex
                          ? "opacity-100 z-0"
                          : "opacity-0 z-0"
                          } ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Arrow at top-right */}
                <>
                  {/* Arrow */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-[#0F172A] rounded-bl-2xl p-2 group">
                      <div className="bg-white p-2 md:p-4 rounded-full cursor-pointer relative transition-all duration-300 transform rotate-[-45deg] hover:rotate-0 z-50">
                        <FaArrowRight className="text-black text-md md:text-xl group-hover:text-green-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner top-0 right-10 md:right-15 bg-white z-30">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0F172A"
                      aria-hidden="true"
                    >
                      <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                    </svg>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner top-10 md:top-15 right-0 bg-white z-30">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0F172A"
                      aria-hidden="true"
                    >
                      <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                    </svg>
                  </div>
                </>

                <>
                  {/* Navigation Controls */}
                  <div className="absolute bottom-0 right-[86px] bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-3 pt-2 overflow-hidden z-30">
                    <div className="flex gap-[10px] bg-white p-1 rounded-full">
                      {/* Previous */}
                      <button
                        className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300"
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                      >
                        <BsArrowLeft className="text-white group-hover:text-[#33BD51]" aria-hidden="true" />
                      </button>

                      {/* Next */}
                      <button
                        className="group bg-[#33BD51] hover:bg-white p-2 rounded-full cursor-pointer transition-colors duration-300"
                        onClick={handleNext}
                        aria-label="Next testimonial"
                      >
                        <BsArrowRight className="text-white group-hover:text-[#33BD51]" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner-bottom bottom-0 right-[20px] md:right-[56px] bg-white z-30">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0F172A"
                      aria-hidden="true"
                    >
                      <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                    </svg>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner-bottom-2 bottom-0 right-[182px] md:right-[192px] bg-white z-30">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0F172A"
                      aria-hidden="true"
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

      {/* Good To Know - Desktop */}
      <div className="hidden md:flex flex-col md:flex-row gap-5 justify-around pt-[270px] md:py-20">
        <div className="flex flex-col text-center">
          <CountUpOnView
            targetNumber={50}
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
    </section>
  );
};

Testimonials.propTypes = {
  id: PropTypes.string,
};

export default Testimonials;