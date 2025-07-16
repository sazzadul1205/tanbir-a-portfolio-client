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

  return (
    <div className="bg-[#0F172A]">
      <Navbar />

      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      <PageNav TOTAL_DOTS={TOTAL_DOTS} activeDot={activeDot} />

      <Home />
    </div>
  );
};

export default MainLayout;
