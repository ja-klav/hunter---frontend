import React from "react";
import PageHeader from "./PageHeader";
import About from "./About";
import ModelPerformance from "./ModelPerformance";
import Features from "./Features";
import Distribution from "./Distribution";

function HomePageWrapper() {
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

export default HomePageWrapper;
