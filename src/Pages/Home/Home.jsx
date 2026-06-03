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
import DeferredSection from "../../components/DeferredSection";

const Home = () => {
  const [activeDot, setActiveDot] = useState(0);
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
    <>
      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      <div className="bg-[#0F172A] text-white w-full z-40 shadow-sm">
        <div className="flex items-center justify-center px-4 py-4 max-w-[1200px] mx-auto">
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

      <DeferredSection rootMargin="300px">
        <AboutMe id="about-me" />
      </DeferredSection>

      <DeferredSection rootMargin="300px">
        <MyServices id="my-services" />
      </DeferredSection>

      <DeferredSection rootMargin="300px">
        <Tools id="tools" />
      </DeferredSection>

      <DeferredSection rootMargin="300px">
        <WhyHireMe id="why-hire-me" />
      </DeferredSection>

      <DeferredSection rootMargin="300px">
        <Testimonials id="testimonials" />
      </DeferredSection>

      <DeferredSection rootMargin="300px">
        <Cards id="blogs" />
      </DeferredSection>
    </>
  );
};

export default Home;
