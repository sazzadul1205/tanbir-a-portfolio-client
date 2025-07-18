import { useState } from "react";

// Shared
import PageNav from "../Shared/PageNav/PageNav";
import Navbar from "../Shared/Navbar/Navbar";

// Pages
import Works from "../Pages/Works/Works";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  // State
  const [activeDot, setActiveDot] = useState(0);

  // Constants
  const TOTAL_DOTS = 6; // fixed number of dots

  // menuData should be passed as props, something like:
  const menuData = [
    { label: "ABOUT ME", id: "about-me" },
    { label: "MY SERVICES", id: "my-services" },
    { label: "TOOLS & TECHNOLOGIES", id: "tools-tech" },
    { label: "CONTACT", id: "contact" },
    { label: "WHY HIRE ME?", id: "why-hire-me" },
  ];

  return (
    <div className="bg-[#0F172A]">
      <Navbar />

      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      <PageNav
        TOTAL_DOTS={TOTAL_DOTS}
        activeDot={activeDot}
        menuData={menuData}
      />

      <Home />
    </div>
  );
};

export default MainLayout;
