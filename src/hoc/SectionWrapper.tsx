import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

interface SectionWrapperProps {
  sectionId: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  sectionId,
  children,
}) => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className="hash-span" id={sectionId}>
      &nbsp;
    </span>
    {children}
  </motion.section>
);

export default SectionWrapper;
