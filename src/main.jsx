import "./index.css";

// React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Layout
import MainLayout from "./Layouts/MainLayout.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<MainLayout />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
