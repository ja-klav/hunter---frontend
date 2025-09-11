import React from "react";
import AppNavbar from "./components/appNavbar";
import PageHeader from "./components/pageHeader";
import About from "./components/about";

function App() {
  return (
    <div className="min-h-screen body">
      <AppNavbar />
      <PageHeader />
      <About />
    </div>
  );
}

export default App;
