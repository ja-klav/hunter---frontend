import React from "react";
import PageHeader from "./components/pageHeader";
import About from "./components/about";
import ModelPerformance from "./components/modelPerformance";
import Features from "./components/features";
import Distribution from "./components/distribution";

function HomePage() {
  return (
    <>
      <PageHeader />
      <About />
      <ModelPerformance />
      <Features />
      <Distribution />
    </>
  );
}

export default HomePage;
