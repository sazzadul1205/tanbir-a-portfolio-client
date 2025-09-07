import { FaStar } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

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
        {/* Card-1 */}
        <div className="card bg-white text-black w-[330px] rounded-xl shadow-xl hover:shadow-2xl">
          {/* Card Image */}
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body px-3">
            {/* Card Title */}
            <h2 className="card-title">
              Eye-Catching HTML5 Banners | High- impact, Animated & Click-Worth
            </h2>

            {/* Time & Price */}
            <div className="flex justify-between items-center">
              {/* Time */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <IoMdTimer className="text-xl" /> <p>3 Day Delivery</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <p>Form :</p>
                <p>$ 40</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <p className="bg-gray-300 h-[1px] w-full" />

          {/* Card Footer */}
          <div className="flex items-center justify-between gap-3 px-3 py-4">
            {/* Author Name & Avatar */}
            <div className="flex items-center gap-3">
              {/* Avatar with Top-Left Green Dot */}
              <div className="relative w-16 h-16">
                <img
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  className="w-16 h-16 rounded-full"
                />
                {/* Top-left Green Dot */}
                <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Name */}
              <h3 className="text-black text-lg inter font-semibold">
                Tanbir A.
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 font-semibold text-gray-500 text-lg ">
              <FaStar className="text-[#d9c306] text-xl " />
              <p>4.8 (48)</p>
            </div>
          </div>
        </div>

        {/* Card-2 */}
        <div className="card bg-white text-black w-[330px] rounded-xl shadow-xl hover:shadow-2xl">
          {/* Card Image */}
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body px-3">
            {/* Card Title */}
            <h2 className="card-title">
              Eye-Catching HTML5 Banners | High- impact, Animated & Click-Worth
            </h2>

            {/* Time & Price */}
            <div className="flex justify-between items-center">
              {/* Time */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <IoMdTimer className="text-xl" /> <p>3 Day Delivery</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <p>Form :</p>
                <p>$ 40</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <p className="bg-gray-300 h-[1px] w-full" />

          {/* Card Footer */}
          <div className="flex items-center justify-between gap-3 px-3 py-4">
            {/* Author Name & Avatar */}
            <div className="flex items-center gap-3">
              {/* Avatar with Top-Left Green Dot */}
              <div className="relative w-16 h-16">
                <img
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  className="w-16 h-16 rounded-full"
                />
                {/* Top-left Green Dot */}
                <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Name */}
              <h3 className="text-black text-lg inter font-semibold">
                Tanbir A.
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 font-semibold text-gray-500 text-lg ">
              <FaStar className="text-[#d9c306] text-xl " />
              <p>4.8 (48)</p>
            </div>
          </div>
        </div>

        {/* Card-3 */}
        <div className="card bg-white text-black w-[330px] rounded-xl shadow-xl hover:shadow-2xl">
          {/* Card Image */}
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body px-3">
            {/* Card Title */}
            <h2 className="card-title">
              Eye-Catching HTML5 Banners | High- impact, Animated & Click-Worth
            </h2>

            {/* Time & Price */}
            <div className="flex justify-between items-center">
              {/* Time */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <IoMdTimer className="text-xl" /> <p>3 Day Delivery</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 text-[16px] font-semibold text-gray-600">
                <p>Form :</p>
                <p>$ 40</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <p className="bg-gray-300 h-[1px] w-full" />

          {/* Card Footer */}
          <div className="flex items-center justify-between gap-3 px-3 py-4">
            {/* Author Name & Avatar */}
            <div className="flex items-center gap-3">
              {/* Avatar with Top-Left Green Dot */}
              <div className="relative w-16 h-16">
                <img
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  className="w-16 h-16 rounded-full"
                />
                {/* Top-left Green Dot */}
                <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Name */}
              <h3 className="text-black text-lg inter font-semibold">
                Tanbir A.
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 font-semibold text-gray-500 text-lg ">
              <FaStar className="text-[#d9c306] text-xl " />
              <p>4.8 (48)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
