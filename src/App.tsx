import React, { useState } from "react";
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
  const [active, setActive] = useState("");
  const [serviceId, setServiceId] = useState(-1);
    
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {" "}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active={active} setActive={setActive}/>
          <Hero setActive={setActive}/>
        </div>
        <Overview setServiceId={setServiceId} />
        <Technologies serviceId={serviceId} />
        <Experience />
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
