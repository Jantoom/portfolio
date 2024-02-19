import { dnui, uq, aubot } from "../assets";
import { Data } from "./interface";

export const experiences: Data = {
  subheadingText: "What I have done so far",
  headingText: "Experience.",
  description:
    "My professional career has tested my leadership and management skills working with diverse teams of various sizes. I am looking forward to more development roles to solidify my software expertise.",
  content: [
    {
      title: "Grant Recipient",
      company_name:
        "Dalian Neusoft University of Information",
      icon: dnui,
      iconBg: "#ffffff",
      date: "June 2023 - July 2023",
      points: [
        "Innovated with Australian & Chinese students of various technical backgrounds on a business venture.",
        "Collaboratively created a proof-of-concept, worked on integrating object recognition models via AWS.",
        "Publicly demonstrated project to investors, teachers & students, awarded \"Best Business Value\".",
      ],
    },
    {
      title: "Casual Academic",
      company_name: "University of Queensland",
      icon: uq,
      iconBg: "#49075e",
      date: "February 2023 - November 2023",
      points: [
        "Supervised 90+ students in small to medium-sized projects over 3 studio-based courses.",
        "Stimulated discussions with students, developing their problem-solving skills and documentation.",
        "Strategized with cotutors to make effective, self-motivated adjustments to teaching & team collaboration.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Aubot",
      icon: aubot,
      iconBg: "#ffffff",
      date: "March 2023 – September 2023",
      points: [
        "Reviewed 100s of Python exercises designed to teach children intermediate concepts seen in university.",
        "Corrected errors in quality, relevance, and consistency, saved time on codebase implementation.",
        "Optimized internal methods and standards for a global development team, reported directly to the CEO.",
      ],
    },
  ],
};
