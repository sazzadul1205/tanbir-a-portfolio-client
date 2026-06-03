import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Icons
import { FaStar } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

// Card Images
import Card1 from "../../../assets/Cards/Card-1.jpg";
import Card2 from "../../../assets/Cards/Card-2.jpg";
import Card3 from "../../../assets/Cards/Card-3.jpg";

// Profile Image
import Profile from "../../../assets/Profile.jpeg";

// Card data
const cardsData = [
  {
    id: 1,
    title:
      "You will get Professional Modern Banners for Google Ads, Social Media and Website",
    image: Card1,
    delivery: "2 Day Delivery",
    price: "30",
    currency: "USD",
    author: "Tanbir A.",
    rating: "4.8",
    reviewCount: "48",
    link: "https://www.upwork.com/services/product/design-eye-catching-html5-banners-high-impact-animated-click-worthy-1894109721557598859?ref=fl_profile",
    category: "HTML5 Banner Design"
  },
  {
    id: 2,
    title:
      "You will get Premium Static Banner Design | Web, Social Media & Ad Campaigns",
    image: Card2,
    delivery: "1 Day Delivery",
    price: "40",
    currency: "USD",
    author: "Tanbir A.",
    rating: "4.8",
    reviewCount: "48",
    link: "https://www.upwork.com/services/product/design-premium-static-banner-design-web-social-media-ad-campaigns-1894450460526764745?ref=fl_profile",
    category: "Static Banner Design"
  },
  {
    id: 3,
    title:
      "You will get Eye-Catching HTML5 Banners | High-Impact, Animated & Click-Worthy",
    image: Card3,
    delivery: "3 Day Delivery",
    price: "90",
    currency: "USD",
    author: "Tanbir A.",
    rating: "4.8",
    reviewCount: "48",
    link: "https://www.upwork.com/services/product/design-professional-modern-banners-for-google-ads-social-media-and-website-1964053843167491359?ref=fl_profile",
    category: "Animated HTML5 Banners"
  },
];

const Cards = ({ id }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [profileLoaded, setProfileLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    // Preload profile image
    const profileImg = new Image();
    profileImg.src = Profile;
    profileImg.onload = () => setProfileLoaded(true);

    // Preload all card images
    cardsData.forEach((card) => {
      const img = new Image();
      img.src = card.image;
      img.onload = () => {
        setLoadedImages((prev) => ({
          ...prev,
          [card.id]: true,
        }));
      };
    });
  }, []);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UpWork Project Catalog",
    "description": "Predefined motion graphics and banner design projects available for hire",
    "itemListElement": cardsData.map((card, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": card.title,
        "description": card.title,
        "image": card.image,
        "offers": {
          "@type": "Offer",
          "price": card.price,
          "priceCurrency": card.currency,
          "availability": "https://schema.org/InStock",
          "url": card.link,
          "seller": {
            "@type": "Person",
            "name": card.author,
            "image": Profile
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": card.rating,
          "reviewCount": card.reviewCount,
          "bestRating": "5"
        }
      }
    }))
  };

  return (
    <section id={id || "cards"} className="bg-white py-[62px]">
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Header */}
      <div className="text-black text-center">
        {/* Title */}
        <h3 className="inter font-semibold text-3xl md:text-4xl text-center text-black">
          UpWork Project Catalog
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
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-white text-black w-[400px] rounded-xl shadow-xl hover:shadow-2xl group"
            aria-label={`View project: ${card.title}`}
          >
            {/* Card Image with loading state */}
            <figure className="relative">
              {/* Skeleton loader */}
              {!loadedImages[card.id] && (
                <div className="w-full h-48 bg-gray-200 animate-pulse rounded-t-xl" />
              )}

              {/* Actual image */}
              <img
                src={card.image}
                alt={card.title}
                className={`w-full transition-opacity duration-300 ${loadedImages[card.id] ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                loading="lazy"
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [card.id]: true,
                  }))
                }
              />
            </figure>

            {/* Card Body */}
            <div className="card-body px-3">
              <h2 className="card-title transition-all duration-500 ease-in-out group-hover:text-green-600 group-hover:underline">
                {card.title}
              </h2>

              {/* Time & Price */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                  <IoMdTimer className="text-xl" aria-hidden="true" />
                  <p>{card.delivery}</p>
                </div>

                <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                  <p>From :</p>
                  <p>$ {card.price}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-gray-300 h-[1px] w-full" aria-hidden="true" />

            {/* Card Footer */}
            <div className="flex items-center justify-between gap-3 px-3 py-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  {/* Profile image skeleton */}
                  {!profileLoaded && (
                    <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
                  )}

                  {/* Profile image */}
                  <img
                    src={Profile}
                    alt={card.author}
                    className={`w-16 h-16 rounded-full transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    loading="lazy"
                    onLoad={() => setProfileLoaded(true)}
                  />

                  {/* Online status indicator */}
                  <span
                    className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    aria-label="Online now"
                  ></span>
                </div>
                <h3 className="text-black text-lg inter font-semibold">
                  {card.author}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 font-semibold text-gray-500 text-lg">
                <FaStar className="text-[#d9c306] text-xl" aria-hidden="true" />
                <p aria-label={`Rated ${card.rating} out of 5 with ${card.reviewCount} reviews`}>
                  {card.rating} ({card.reviewCount})
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

Cards.propTypes = {
  id: PropTypes.string,
};

export default Cards;