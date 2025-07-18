import { FaArrowRight, FaStar } from "react-icons/fa6";
import UpWorkICon from "../../../assets/UpWorkSymbol1.png";

// Icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { useState } from "react";

const rawText = `Client Testimonial for Tanbir’s Landing Page Work. We required landing pages in three different languages—English, Arabic, and Hindi—as part of a microsite project. Tanbir delivered the solution with remarkable speed and precision. The original English page we had built with another developer was poorly structured and far from mobile-friendly. Tanbir immediately recognized the issues, suggested improvements, and rebuilt the page from scratch with impressive efficiency. His strong technical knowledge and graphic design skills ensured the result was sleek, responsive across devices, and visually appealing. Even the images were enhanced based on his recommendations for size and aesthetics. Once the English version was perfected, the Arabic and Hindi versions were added seamlessly, maintaining the same level of quality and consistency. Every step—from layout adjustments to language formatting—was handled with care and expertise.`;

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex gap-4">
        {/* Misc */}
        <div className="w-1/4 flex flex-col gap-2  ">
          {/* About Me */}
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
            <div className="avatar avatar-online">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div>
            <div className="text-black">
              <h3 className="font-semibold text-lg">TANBIR A.</h3>
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="w-3/4 relative bg-white px-5 py-3">
          {/* Title */}
          <h3 className="text-green-600 text-lg font-semibold">
            Website landing pages in 3 languages
          </h3>

          {/* Review & Time */}
          <div className="pt-2 flex items-center gap-5 ">
            {/* Stars */}
            <div className="flex items-center gap-1">
              <FaStar className="text-[#EFBF04]" />
              <FaStar className="text-[#EFBF04]" />
              <FaStar className="text-[#EFBF04]" />
              <FaStar className="text-[#EFBF04]" />
              <FaStar className="text-[#EFBF04]" />
            </div>

            {/* Divider */}
            <p className="text-gray-500">|</p>

            {/* Time */}
            <div className="flex text-gray-600 font-medium items-center gap-1">
              <p>Jun 26, 2018</p> <p>-</p>
              <p>Aug 7, 2018</p>
            </div>
            {/* Share Icon */}
            <div className="rounded-full text-green-700 border-2 border-green-700 p-1">
              <MdOutlineShare className="text-2xl" />
            </div>
          </div>

          {/* Testimonial Text */}
          <div>{formatTestimonial(rawText, showMore, setShowMore)}</div>

          {/* Price & State */}
          <div className="font-semibold text-gray-600 flex items-center justify-between w-1/2 py-2">
            <p>$ 420</p>

            <p>Fixed Price</p>
          </div>

          <div className="absolute top-0 right-0 bg-[#0F172A] p-2 ">
            <div className="bg-white p-4 rounded-full">
              <FaArrowRight className="text-black text-xl transition-transform duration-300 rotate-[-45deg] hover:rotate-0" />
            </div>
          </div>

          {/* Available */}
          <div className="absolute bottom-0 right-10 bg-[#0F172A] rounded-tl-3xl rounded-tr-3xl px-2 pt-2 overflow-hidden">
            <div className="relative flex items-center gap-2 bg-white text-black py-[8px] px-7 rounded-full">
              {/* Blinking Dot */}
              <span
                className="w-2 h-2 bg-[#33BD51] rounded-full"
                style={{
                  animation: "blink 1.5s infinite ease-in-out",
                }}
              />

              {/* Text */}
              <p className="text-sm font-semibold">Available Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const formatTestimonial = (text, showMore, setShowMore) => {
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
          onClick={() => setShowMore(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
};
