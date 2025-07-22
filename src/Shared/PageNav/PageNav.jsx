import React, { useState } from "react";
import PropTypes from "prop-types";

// Icons
import { FiMenu, FiX } from "react-icons/fi";

const PageNav = ({ TOTAL_DOTS, activeDot, activeSection, menuData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <div className="bg-[#0F172A] text-white w-full z-40 shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 max-w-[1200px] mx-auto">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {[...Array(TOTAL_DOTS)].map((_, i) => (
            <span
              key={i}
              className={`p-1 rounded-full w-2 h-2 transition ${
                i === activeDot ? "bg-[#33BD51]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4">
          {menuData.map((item, index) => (
            <React.Fragment key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`group relative text-sm tracking-wide px-2 ${
                  activeSection === index ? "font-bold" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[1.5px] bg-white/50 transition-all duration-300 ${
                    activeSection === index
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
              {index !== menuData.length - 1 && (
                <span className="text-gray-500 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 border-t border-white/10 bg-[#0F172A]">
          {menuData.map((item, index) => (
            <div key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`block text-sm tracking-wide ${
                  activeSection === index
                    ? "font-bold text-[#33BD51]"
                    : "text-white"
                }`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

PageNav.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  activeDot: PropTypes.number.isRequired,
  activeSection: PropTypes.number.isRequired,
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageNav;
