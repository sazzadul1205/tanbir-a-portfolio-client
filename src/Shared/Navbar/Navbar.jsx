import React from "react";
import { NavLink } from "react-router-dom";

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
    <div className="navbar bg-[#0F172A] max-w-[1200px] mx-auto h-[110px] shadow-sm text-white">
      {/* Left Brand */}
      <div className="navbar-start">
        <p className="text-xl font-semibold tracking-wide">TANBIR A.</p>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex flex-col">
        <h3 className="text-[22px] font-medium uppercase">
          Digital Advertising Production
        </h3>
        <ul className="flex items-center space-x-4 mt-2">
          {menuData.map((item, index) => (
            <React.Fragment key={index}>
              <li className="relative group">
                <NavLink
                  to={item.path}
                  // eslint-disable-next-line no-unused-vars
                  className={({ isActive }) =>
                    `relative text-sm tracking-wide px-2 py-1`
                  }
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
      <div className="navbar-end">
        <div className="flex items-center gap-2 bg-white text-black py-1 px-5 rounded-full">
          <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2" />
          <p className="text-sm font-medium">Available Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
