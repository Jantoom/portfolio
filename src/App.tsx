import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  Overview,
  Experience,
  Technologies,
  Projects,
  Testimonials,
  Contact,
  StarsCanvas,
} from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {" "}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Overview />
        <Experience />
        <Technologies />
        <Projects />
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
