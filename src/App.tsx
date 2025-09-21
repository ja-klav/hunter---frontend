import React from "react";
import AppNavbar from "./components/struct/AppNavBar";
import Footer from "./components/struct/Footer";
import { Routes, Route } from "react-router-dom";
import HomePageWrapper from "./components/homepage/HomePageWrapper";
import ClassifyImageWrapper from "./components/classify_image/ClassifyImageWrapper";
import ClassifyVideoWrapper from "./components/classify_video/ClassifyVideoWrapper";

function App() {
  return (
    <div className="body">
      <AppNavbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/image" element={<ClassifyImageWrapper />} />
        <Route path="/video" element={<ClassifyVideoWrapper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
