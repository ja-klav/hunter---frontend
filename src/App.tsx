import React from "react";
import AppNavbar from "./components/appNavbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ClassifyImage from "./components/classifyImage";

function App() {
  return (
    <div className="body">
      <AppNavbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/image" element={<ClassifyImage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
