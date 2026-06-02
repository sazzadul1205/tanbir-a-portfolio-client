import "./index.css";

// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "./Layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<MainLayout />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);