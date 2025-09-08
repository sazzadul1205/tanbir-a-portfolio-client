// Icons
import { FaStar } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

// Card data
const cardsData = [
  {
    id: 1,
    title: "Eye-Catching HTML5 Banners | High-impact, Animated & Click-Worth",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    delivery: "3 Day Delivery",
    price: "$ 40",
    author: "Tanbir A.",
    rating: "4.8 (48)",
  },
  {
    id: 2,
    title: "Responsive Web Design | Modern, User-Friendly, and Fast",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    delivery: "5 Day Delivery",
    price: "$ 60",
    author: "Tanbir A.",
    rating: "4.9 (120)",
  },
  {
    id: 3,
    title: "Custom React Components | Clean, Reusable & Scalable",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    delivery: "7 Day Delivery",
    price: "$ 100",
    author: "Tanbir A.",
    rating: "5.0 (80)",
  },
];

const Cards = () => {
  return (
    <div className="bg-white py-[62px]">
      {/* Heder */}
      <div className="text-black text-center">
        {/* Title */}
        <h3 className="text-[40px] font-semibold Inter">
          Upwork Project catalog
        </h3>

        {/* Description */}
        <p className="Inter text-[18px] pt-[15px]">
          Get started working with Me quickly with these predefined projects.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 pt-[50px]">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="card bg-white text-black w-[330px] rounded-xl shadow-xl hover:shadow-2xl"
          >
            {/* Card Image */}
            <figure>
              <img src={card.image} alt={card.title} />
            </figure>

            {/* Card Body */}
            <div className="card-body px-3">
              <h2 className="card-title">{card.title}</h2>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
