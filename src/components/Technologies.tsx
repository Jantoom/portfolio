import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { technologies } from "../data";

interface OverviewProps {
  serviceId: number;
}

const Technologies: React.FC<OverviewProps> = ({ serviceId }) => {
  return (
    <SectionWrapper sectionId={""}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.content.map((technology) => (
          technology.serviceIds.includes(serviceId) ? 
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas name={technology.name} icon={technology.icon} />
            </div> : null
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Technologies;
