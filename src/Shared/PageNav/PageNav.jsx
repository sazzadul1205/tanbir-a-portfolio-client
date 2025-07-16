import React from "react";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  const menuData = [
    { label: "ABOUT ME", path: "/" },
    { label: "MY SERVICES", path: "/about" },
    { label: "TOOLS & TECHNOLOGIES", path: "/contact" },
    { label: "CONTACT", path: "/gif" },
    { label: "WHY HIRE ME?", path: "/ai" },
  ];

  return (
    <div className="shadow-sm text-white">
      <div className="navbar py-1  max-w-[1200px] mx-auto">
        {/* Left Brand */}
        <div className="navbar-start justify-end gap-2 pr-10">
            <span className="p-1 bg-[#33BD51] rounded-full w-2 h-2" />
            <span className="p-1 bg-gray-200 rounded-full w-2 h-2" />
            <span className="p-1 bg-gray-200 rounded-full w-2 h-2" />
            <span className="p-1 bg-gray-200 rounded-full w-2 h-2" />
            <span className="p-1 bg-gray-200 rounded-full w-2 h-2" />
            <span className="p-1 bg-gray-200 rounded-full w-2 h-2" />
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex flex-col py-1">
          <ul className="flex items-center space-x-4">
            {menuData.map((item, index) => (
              <React.Fragment key={index}>
                <li className="relative group">
                  <NavLink
                    to={item.path}
                    // eslint-disable-next-line no-unused-vars
                    className={({ isActive }) =>
                      `relative text-sm tracking-wide px-2`
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
        <div className="navbar-end" />
      </div>
    </div>
  );
};

export default PageNav;
