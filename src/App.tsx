import React from "react";
import AppNavbar from "./components/appNavbar";
import PageHeader from "./components/pageHeader";
import About from "./components/about";
import ModelPerformance from "./components/modelPerformance";
import Features from "./components/features";
import Distribution from "./components/distribution";

function App() {
  return (
    <div className="body">
      <AppNavbar />
      <PageHeader />
      <About />
      <ModelPerformance />
      <Features />
      <Distribution/>
    </div>
  );
}

export default App;
