import React from "react";
import AppNavbar from "./components/struct/AppNavBar";
import Footer from "./components/struct/Footer";
import { Routes, Route } from "react-router-dom";
import HomePageWrapper from "./components/homepage/HomePageWrapper";
import ClassifyImageWrapper from "./components/classify_image/ClassifyImageWrapper";

function App() {
  return (
    <div className="body">
      <AppNavbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/image" element={<ClassifyImageWrapper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
