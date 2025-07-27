import { useEffect, useState } from "react";

// Icons
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";

// Assets
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";
import CountUpOnView from "./CountUpOnView/CountUpOnView ";

// Testimonial data
const testimonialData = [
  {
    id: 1,
    name: "TANBIR A.",
    location: "Dhaka, Bangladesh",
    profileImg: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
    title: "Website landing pages in 3 languages",
    dateFrom: "Jun 26, 2018",
    dateTo: "Aug 7, 2018",
    price: "$420",
    priceType: "Fixed Price",
    text: `Client Testimonial for Tanbir’s Landing Page Work. We required landing pages in three different languages—English, Arabic, and Hindi—as part of a microsite project. Tanbir delivered the solution with remarkable speed and precision. The original English page we had built with another developer was poorly structured and far from mobile-friendly. Tanbir immediately recognized the issues, suggested improvements, and rebuilt the page from scratch with impressive efficiency. His strong technical knowledge and graphic design skills ensured the result was sleek, responsive across devices, and visually appealing. Even the images were enhanced based on his recommendations for size and aesthetics. Once the English version was perfected, the Arabic and Hindi versions were added seamlessly, maintaining the same level of quality and consistency. Every step—from layout adjustments to language formatting—was handled with care and expertise.`,
  },
  {
    id: 3,
    name: "JACOB R.",
    location: "Berlin, Germany",
    profileImg: "https://img.daisyui.com/images/profile/demo/jacob@192.webp",
    title: "React Dashboard with API Integration",
    dateFrom: "May 20, 2022",
    dateTo: "Jun 18, 2022",
    price: "$1,100",
    priceType: "Fixed Price",
    text: `We needed a dashboard built with React and Tailwind CSS to integrate several REST APIs for our logistics platform. Sazzadul delivered a pixel-perfect interface that was not only responsive but also highly optimized. He structured the codebase professionally using reusable components and proper state management. When a third-party API returned inconsistent data, he handled edge cases gracefully and maintained a clean user experience. The animations were subtle and performance-focused, just what we needed for a professional product UI. Would definitely hire again.`,
  },
  {
    id: 4,
    name: "MAYA K.",
    location: "London, UK",
    profileImg: "https://img.daisyui.com/images/profile/demo/maya@192.webp",
    title: "E-commerce Speed Optimization",
    dateFrom: "Oct 3, 2023",
    dateTo: "Oct 10, 2023",
    price: "$300",
    priceType: "Hourly",
    text: `Our Shopify store was loading painfully slow and affecting conversions. Sazzadul audited the site using Lighthouse and PageSpeed tools, removed unused scripts, compressed images, lazy-loaded sections, and helped migrate some heavy content to CDN. Our load times dropped from 7.2s to 1.8s. He even suggested a simpler theme structure and guided us on app consolidation. Quick turnaround and great communication. Highly reliable and efficient.`,
  },
  {
    id: 5,
    name: "OMAR F.",
    location: "Dubai, UAE",
    profileImg: "https://img.daisyui.com/images/profile/demo/omar@192.webp",
    title: "Multi-Language Portfolio Website",
    dateFrom: "Jan 14, 2024",
    dateTo: "Feb 2, 2024",
    price: "$950",
    priceType: "Fixed Price",
    text: `I hired Sazzadul to build a personal portfolio that supports English and Arabic versions. The design was built using Next.js with i18n support and AOS animations. He created a sleek dark/light mode toggle, custom font integration, and clean routing. The Arabic RTL support was flawless — not just text direction but layout mirroring as well. I especially liked how he handled SEO metadata dynamically per language. Overall, the result was fast, mobile-first, and elegant. Professional work.`,
  },

  // Add more testimonials here...
];

const Testimonials = () => {
  const [showMoreId, setShowMoreId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 12000); // 12 seconds per testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-24">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-[19px] ">
          {/* Title */}
          <h3 className="inter font-semibold bg-[#156E27] h-[100px] flex flex-col px-4 justify-center text-white">
            <span className="text-[20px]">WHAT CUSTOMER SAY</span>
            <span className="text-[22px]">ABOUT ME</span>
          </h3>

          {/* Up Work Icon */}
          <div className="bg-[#174153] h-[142px]">
            <img
              src={UpWorkICon}
              alt="Up Work Icon"
              className="w-[250px] h-[140px] mx-auto"
            />
          </div>

          {/* Image */}
          <div className="bg-white py-1 px-3 flex items-center gap-3">
            {/* Avatar */}
            <div className="avatar avatar-online">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div>

            {/* Information */}
            <div className="text-black">
              <h3 className="font-semibold text-lg">TANBIR A.</h3>
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single Testimonial */}
        <div className="w-full md:w-3/4 relative">
          <div className="relative w-full">
            <div
              key={testimonialData[currentIndex].id}
              className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 animate-fade-slide"
            >
              <div className="bg-white px-5 py-3 shadow-md relative w-full pb-10 md:pb-0 h-[381px] overflow-hidden">
                <div className="w-full max-w-full">
                  <img
                    src="https://i.ibb.co/FLqg6rMP/Screenshot-1-1.png"
                    alt="Screenshot"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Title */}
                {/* <h3 className="text-green-600 text-lg font-semibold">
                  {testimonialData[currentIndex].title}
                </h3> */}

                {/* Stars */}
                {/* <div className="pt-2 md:flex items-center gap-5"> */}
                {/* <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-[#EFBF04]" />
                      ))}
                  </div> */}

                {/* <div className="flex items-center gap-5"> */}
                {/* Divider */}
                {/* <p className="text-gray-500">|</p> */}

                {/* Date From - Date To */}
                {/* <div className="flex text-gray-600 font-medium items-center gap-1">
                      <p>{testimonialData[currentIndex].dateFrom}</p>
                      <p>-</p>
                      <p>{testimonialData[currentIndex].dateTo}</p>
                    </div> */}

                {/* Share Icon */}
                {/* <div className="rounded-full text-green-700 border-2 border-green-700 p-1">
                      <MdOutlineShare className="text-2xl" />
                    </div> */}
                {/* </div> */}
                {/* </div> */}

                {/* Testimonial Content */}
                {/* <div>
                  {formatTestimonial(
                    testimonialData[currentIndex].text,
                    showMoreId === testimonialData[currentIndex].id,
                    () =>
                      setShowMoreId(
                        showMoreId === testimonialData[currentIndex].id
                          ? null
                          : testimonialData[currentIndex].id
                      )
                  )}
                </div> */}

                {/* Price & Price Type */}
                {/* <div className="font-semibold text-gray-600 flex items-center justify-between md:w-1/2 py-2">
                  <p>{testimonialData[currentIndex].price}</p>
                  <p>{testimonialData[currentIndex].priceType}</p>
                </div> */}

                {/* Arrow at top-right */}
                <>
                  {/* Arrow */}
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-[#0F172A] rounded-bl-2xl  p-2">
                      <div className="bg-white p-4 rounded-full cursor-pointer relative transition-all duration-300 transform rotate-[-45deg] hover:rotate-0 z-50">
                        <FaArrowRight className="text-black text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner top-0 right-15 bg-white z-30 ">
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
                  <div className="pbmit-sticky-corner top-15 right-0 bg-white z-30 ">
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
                  <div className="absolute bottom-0 right-10 bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-2 pt-2 overflow-hidden">
                    <button className="relative flex items-center gap-2 bg-white text-black py-[8px] px-7 rounded-full cursor-pointer">
                      <span
                        className="w-2 h-2 bg-[#33BD51] rounded-full"
                        style={{ animation: "blink 1.5s infinite ease-in-out" }}
                      />
                      <p className="text-sm font-semibold">Available Now</p>
                    </button>
                  </div>

                  {/* Sticky Corner */}
                  <div className="pbmit-sticky-corner-bottom bottom-0 right-[11px] bg-white z-30 ">
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
                  <div className="pbmit-sticky-corner-bottom-2 bottom-0 right-[218px] bg-white z-30 ">
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

      {/* Good To know  */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around pt-8 pb-44">
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
    </div>
  );
};

// Text formatter
const formatTestimonial = (text, showMore, toggle) => {
  const sentences = text.split(". ").filter(Boolean);
  if (sentences.length === 0) return null;

  const firstSentence = sentences[0].trim() + ".";
  const rest = sentences
    .slice(1)
    .map((s) => (s.trim().endsWith(".") ? s.trim() : s.trim() + "."));

  const displayed = showMore ? rest : rest.slice(0, 5);

  return (
    <div className="text-gray-600 text-md inter font-medium leading-6 mt-3">
      <p className="font-bold pb-3">{firstSentence}</p>
      {displayed.map((sentence, i) => (
        <p key={i} className="mt-[1px]">
          {sentence}
        </p>
      ))}
      {!showMore && (
        <button
          className="mt-2 text-[#33BD51] underline text-sm"
          onClick={toggle}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Testimonials;
