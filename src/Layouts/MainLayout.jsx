import { useState } from "react";

// Shared
import Navbar from "../Shared/Navbar/Navbar";

// Pages
import Works from "../Pages/Works/Works";
import Footer from "../Shared/Footer/Footer";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import MyServices from "../Pages/Home/MyServices/MyServices";
import Tools from "../Pages/Home/Tools/Tools";
import WhyHireMe from "../Pages/Home/WhyHireMe/WhyHireMe";
import Testimonials from "../Pages/Home/Testimonials/Testimonials";
import Cards from "../Pages/Home/Cards/Cards";

const MainLayout = () => {
  const [activeDot, setActiveDot] = useState(0); // For Dots

  const TOTAL_DOTS = 6;

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
    <div className="bg-[#0F172A] fix-glitch">
      <Navbar />

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
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeDot
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
