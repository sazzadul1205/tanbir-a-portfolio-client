import { useState } from "react";
import Works from "../Pages/Home/Works/Works";
import Navbar from "../Shared/Navbar/Navbar";
import PageNav from "../Shared/PageNav/PageNav";

const MainLayout = () => {
  const [activeDot, setActiveDot] = useState(0);
  const TOTAL_DOTS = 6; // fixed number of dots

  return (
    <div className="bg-[#0F172A]">
      <Navbar />

      <Works setActiveDot={setActiveDot} TOTAL_DOTS={TOTAL_DOTS} />

      <PageNav TOTAL_DOTS={TOTAL_DOTS} activeDot={activeDot} />

      
    </div>
  );
};

export default MainLayout;
