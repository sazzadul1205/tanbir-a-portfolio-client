import React from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const menuData = [
    { label: "HTML5 DISPLAY", path: "/" },
    { label: "HTML5 DYNAMIC", path: "/about" },
    { label: "SOCIAL MEDIA", path: "/contact" },
    { label: "GIF", path: "/gif" },
    { label: "GENERATIVE AI", path: "/ai" },
    { label: "ME", path: "/me" },
  ];

  return (
    <div className="bg-[#0F172A] border-b border-gray-600 shadow-sm text-white">
      <style>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 6px 2px #33BD51;
          }
          50% {
            opacity: 0.3;
            box-shadow: none;
          }
        }
      `}</style>

      {/* Top Navbar */}
      <div className="max-w-[1200px] mx-auto h-[110px] flex justify-between items-center px-4">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          {/* Mobile Drawer Toggle */}
          <label htmlFor="mobile-drawer" className="lg:hidden cursor-pointer">
            <FiMenu className="text-2xl" />
          </label>
          <p className="text-xl font-semibold tracking-wide">TANBIR A.</p>
        </div>

        {/* Center Menu (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center">
          <h3 className="text-[22px] font-medium uppercase">
            Digital Advertising Production
          </h3>
          <ul className="flex items-center space-x-4 mt-2">
            {menuData.map((item, index) => (
              <React.Fragment key={index}>
                <li className="relative group">
                  <NavLink
                    to={item.path}
                    className={() => `relative text-sm tracking-wide px-2 py-1`}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 bottom-[-4px] h-[1.5px] bg-white/50 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
                {index !== menuData.length - 1 && (
                  <span className="text-gray-500 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* Right Badge */}
        <div>
          <div className="flex items-center gap-2 bg-white text-black py-1 px-5 rounded-full">
            <span
              className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
              style={{
                animation: "blink 1.5s infinite",
                animationTimingFunction: "ease-in-out",
              }}
            />
            <p className="text-sm font-medium">Available Now</p>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label
            htmlFor="mobile-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu p-4 w-[80%] min-h-full bg-[#1E293B] text-white space-y-2">
            <h2 className="text-md font-semibold mb-3">
              Digital Advertising Production
            </h2>
            {menuData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="text-sm tracking-wide"
                  onClick={() =>
                    (document.getElementById("mobile-drawer").checked = false)
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
