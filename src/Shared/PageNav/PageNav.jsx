import React from "react";
import PropTypes from "prop-types";

const PageNav = ({ TOTAL_DOTS, activeDot, menuData }) => {
  return (
    <div className="shadow-sm text-white">
      <div className="flex items-center justify-center gap-10 py-4 max-w-[1200px] mx-auto w-full">
        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2">
          {[...Array(TOTAL_DOTS)].map((_, i) => (
            <span
              key={i}
              className={`p-1 rounded-full w-2 h-2 ${
                i === activeDot ? "bg-[#33BD51]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex flex-col">
          <ul className="flex items-center space-x-4">
            {menuData.map((item, index) => (
              <React.Fragment key={index}>
                <li className="relative group">
                  <a
                    href={`#${item.id}`}
                    className={`relative text-sm tracking-wide px-2 ${
                      activeDot === index ? "font-bold" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {item.label}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[1.5px] bg-white/50 transition-all duration-300 ${
                        activeDot === index
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
                {index !== menuData.length - 1 && (
                  <span className="text-gray-500 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PageNav.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  activeDot: PropTypes.number.isRequired,
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageNav;
