import { Link } from "react-router";

// Icons
import { FaStar } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

import Card1 from "../../../assets/Cards/Card-1.jpg";
import Card2 from "../../../assets/Cards/Card-2.jpg";
import Card3 from "../../../assets/Cards/Card-3.jpg";

// Card data
const cardsData = [
  {
    id: 1,
    title:
      "You will get Professional Modern Banners for Google Ads, Social Media and Website",
    image: Card1,
    delivery: "2 Day Delivery",
    price: "$ 30",
    author: "Tanbir A.",
    rating: "4.8 (48)",
    link: "https://www.upwork.com/services/product/design-eye-catching-html5-banners-high-impact-animated-click-worthy-1894109721557598859?ref=fl_profile",
  },
  {
    id: 2,
    title:
      "You will get Premium Static Banner Design | Web, Social Media & Ad Campaigns",
    image: Card2,
    delivery: "1 Day Delivery",
    price: "$ 40",
    author: "Tanbir A.",
    rating: "4.8 (48)",
    link: "https://www.upwork.com/services/product/design-premium-static-banner-design-web-social-media-ad-campaigns-1894450460526764745?ref=fl_profile",
  },
  {
    id: 3,
    title:
      "You will get Eye-Catching HTML5 Banners | High-Impact, Animated & Click-Worthy",
    image: Card3,
    delivery: "3 Day Delivery",
    price: "$ 90",
    author: "Tanbir A.",
    rating: "4.8 (48)",
    link: "https://www.upwork.com/services/product/design-professional-modern-banners-for-google-ads-social-media-and-website-1964053843167491359?ref=fl_profile",
  },
];

const Cards = () => {
  return (
    <div className="bg-white py-[62px]">
      {/* Heder */}
      <div className="text-black text-center">
        {/* Title */}
        <h3 className="inter font-semibold text-3xl md:text-4xl text-center text-black">
          Upwork Project catalog
        </h3>

        {/* Description */}
        <p className="inter text-base md:text-lg text-center text-black pt-4 px-5 mx-auto">
          Get started working with Me quickly with these predefined projects.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 pt-[50px]">
        {cardsData.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="card bg-white text-black w-[400px] rounded-xl shadow-xl hover:shadow-2xl group"
          >
            {/* Card Image */}
            <figure>
              <img src={card.image} alt={card.title} />
            </figure>

            {/* Card Body */}
            <div className="card-body px-3">
              <h2 className="card-title transition-all duration-500 ease-in-out group-hover:text-green-600 group-hover:underline">
                {card.title}
              </h2>

              {/* Time & Price */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                  <IoMdTimer className="text-xl" /> <p>{card.delivery}</p>
                </div>

                <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                  <p>From :</p>
                  <p>{card.price}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <p className="bg-gray-300 h-[1px] w-full" />

            {/* Card Footer */}
            <div className="flex items-center justify-between gap-3 px-3 py-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                    className="w-16 h-16 rounded-full"
                  />
                  <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <h3 className="text-black text-lg inter font-semibold">
                  {card.author}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 font-semibold text-gray-500 text-lg ">
                <FaStar className="text-[#d9c306] text-xl " />
                <p>{card.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
