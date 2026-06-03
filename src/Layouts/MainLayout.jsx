// MainLayout.jsx

// PropTypes
import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";

// Shared
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#0F172A] fix-glitch">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default MainLayout;
