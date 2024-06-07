import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { overview } from "../data";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface OverviewCardProps {
  index: number;
  setServiceId: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  icon: any;
  serviceId: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ index, setServiceId, title, icon, serviceId }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => setServiceId(serviceId)}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-32 h-32 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

interface OverviewProps {
  setServiceId: React.Dispatch<React.SetStateAction<number>>;
}

const Overview: React.FC<OverviewProps> = ({ setServiceId }) => {
  return (
    <SectionWrapper sectionId="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{overview.subheadingText}</p>
        <h2 className={styles.sectionHeadText}>{overview.headingText}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {overview.description} <br />
        <br />{" "}
        <span className="font-semibold">
          Click on the tiles to see what technologies I use!
        </span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {overview.content.map((service, index) => (
          <OverviewCard key={service.title} index={index} setServiceId={setServiceId} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Overview;
