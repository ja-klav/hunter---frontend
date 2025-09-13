import React from "react";
import AppNavbar from "./components/appNavbar";
import PageHeader from "./components/pageHeader";
import About from "./components/about";
import ModelPerformance from "./components/modelPerformance";
import Features from "./components/features";

function App() {
  return (
    <div className="min-h-screen body">
      <AppNavbar />
      <PageHeader />
      <About />
      <ModelPerformance />
      <Features />
    </div>
  );
}

export default App;
