// MainLayout.jsx
import { useEffect, useState } from "react";

// Shared
import PageNav from "../Shared/PageNav/PageNav";
import Navbar from "../Shared/Navbar/Navbar";

// Pages
import Works from "../Pages/Works/Works";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  const [activeDot, setActiveDot] = useState(0); // For Dots
  const [activeSection, setActiveSection] = useState(0); // For Nav Highlight

  const TOTAL_DOTS = 6;

  const menuData = [
    { label: "ABOUT ME", id: "about-me" },
    { label: "MY SERVICES", id: "my-services" },
    { label: "TOOLS & TECHNOLOGIES", id: "tools" },
    { label: "WHY HIRE ME?", id: "why-hire-me" },
    { label: "TESTIMONIALS", id: "testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = 0;

      for (let i = 0; i < menuData.length; i++) {
        const el = document.getElementById(menuData[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = i;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      <PageNav
        TOTAL_DOTS={TOTAL_DOTS}
        activeDot={activeDot}
        activeSection={activeSection}
        menuData={menuData}
        scrollToWorkDot={scrollToWorkDot}
      />

      <Home />

      <Footer />
    </div>
  );
};

export default MainLayout;
