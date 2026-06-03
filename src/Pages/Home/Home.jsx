// Pages/Home/Home.jsx

// React
import { useState } from "react";

// Page Components
import Cards from "./Cards/Cards";
import Tools from "./Tools/Tools";
import Works from "../Works/Works";
import AboutMe from "./AboutMe/AboutMe";
import WhyHireMe from "./WhyHireMe/WhyHireMe";
import MyServices from "./MyServices/MyServices";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  // State to track the active dot for the Works section
  const [activeDot, setActiveDot] = useState(0);

  // Total number of dots (should match the number of scrollable items in Works)
  const TOTAL_DOTS = 6;

  // Scroll to the corresponding work item when a dot is clicked
  const scrollToWorkDot = (dotIndex) => {
    const worksContainer = document.getElementById("works-scroll");

    if (!worksContainer) return;

    const scrollWidth = worksContainer.scrollWidth / 2;
    const scrollTo = (scrollWidth / TOTAL_DOTS) * dotIndex;

    worksContainer.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });

    setActiveDot(dotIndex);
  };


  return (
    <>
      {/* Works */}
      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      {/* Page Nav */}
      <div className="bg-[#0F172A] text-white w-full z-40 shadow-sm">
        <div className="flex items-center justify-center px-4 py-4 max-w-[1200px] mx-auto">
          {/* Dot Indicators */}
          <div className="flex gap-3">
            {[...Array(TOTAL_DOTS)].map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToWorkDot(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${i === activeDot
                  ? "bg-[#33BD51]"
                  : "bg-gray-400 hover:bg-[#33BD51] hover:opacity-80"
                  }`}
                aria-label={`Scroll to item ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Me */}
      <AboutMe id="about-me" />

      {/* My Services */}
      <MyServices id="my-services" />

      {/* Tools */}
      <Tools id="tools" />

      {/* Why Hire Me */}
      <WhyHireMe id="why-hire-me" />

      {/* Testimonials */}
      <Testimonials id="testimonials" />

      {/* Cards */}
      <Cards id="blogs" />

    </>
  );
};

export default Home;