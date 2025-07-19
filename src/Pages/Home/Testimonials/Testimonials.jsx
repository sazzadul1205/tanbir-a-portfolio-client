import { useEffect, useState } from "react";

// Icons
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";

// Assets
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";

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
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col gap-2">
          {/* Title */}
          <h3 className="inter font-semibold text-lg bg-[#156E27] py-5 px-10">
            WHAT CUSTOMER SAY ABOUT ME
          </h3>

          {/* Up Work Icon */}
          <div className="bg-[#174153]">
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
        <div className="w-3/4 relative overflow-hidden">
          <div className="relative w-full">
            <div
              key={testimonialData[currentIndex].id}
              className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 animate-fade-slide"
            >
              <div className="bg-white px-5 py-3 rounded-md h-[360px] shadow-md relative w-full">
                {/* Title */}
                <h3 className="text-green-600 text-lg font-semibold">
                  {testimonialData[currentIndex].title}
                </h3>

                {/* Stars */}
                <div className="pt-2 flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-[#EFBF04]" />
                      ))}
                  </div>

                  {/* Divider */}
                  <p className="text-gray-500">|</p>

                  {/* Date From - Date To */}
                  <div className="flex text-gray-600 font-medium items-center gap-1">
                    <p>{testimonialData[currentIndex].dateFrom}</p>
                    <p>-</p>
                    <p>{testimonialData[currentIndex].dateTo}</p>
                  </div>

                  {/* Share Icon */}
                  <div className="rounded-full text-green-700 border-2 border-green-700 p-1">
                    <MdOutlineShare className="text-2xl" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div>
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
                </div>

                {/* Price & Price Type */}
                <div className="font-semibold text-gray-600 flex items-center justify-between w-1/2 py-2">
                  <p>{testimonialData[currentIndex].price}</p>
                  <p>{testimonialData[currentIndex].priceType}</p>
                </div>

                {/* Top-right arrow button */}
                {/* Arrow at top-right */}
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-[#0F172A] rounded-full p-4">
                    <div className="bg-white p-4 rounded-full cursor-pointer transition-transform duration-300 rotate-[-45deg] hover:rotate-0">
                      <FaArrowRight className="text-black text-xl  " />
                    </div>
                  </div>
                </div>

                {/* Available Now */}
                <div className="absolute bottom-0 right-10 bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-2 pt-2 overflow-hidden">
                  <div className="relative flex items-center gap-2 bg-white text-black py-[8px] px-7 rounded-full">
                    <span
                      className="w-2 h-2 bg-[#33BD51] rounded-full"
                      style={{ animation: "blink 1.5s infinite ease-in-out" }}
                    />
                    <p className="text-sm font-semibold">Available Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Good To know  */}
      <div className="flex items-center justify-around py-7">
        <div className="flex flex-col text-center">
          <p className="italianno-regular text-5xl">1500 +</p>
          <p>Project Completed</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="italianno-regular text-5xl">17 +</p>
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="italianno-regular text-5xl">98 +</p>
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

  const displayed = showMore ? rest : rest.slice(0, 4);

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
