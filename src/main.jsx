import "./index.css";

// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// SEO
import { HelmetProvider } from "react-helmet-async";

// Layout
import MainLayout from "./Layouts/MainLayout.jsx";

// Pages
import GIF from "./Pages/GIF/GIF.jsx";
import Home from "./Pages/Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Main route */}
            <Route path="/" element={<Home />} />

            {/* Main route */}
            <Route path="/gif" element={<GIF />} />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
);