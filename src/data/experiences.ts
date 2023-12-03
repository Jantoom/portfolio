import { dnui, uq, aubot } from "../assets";
import { Data } from "./interface";

export const experiences: Data = {
  subheadingText: "What I have done so far",
  headingText: "Experience.",
  description:
    "My professional career has tested my leadership and management skills working with diverse teams of various sizes. I am looking forward to more development roles to solidify my software expertise.",
  content: [
    {
      title: "Study Abroad",
      company_name:
        "Dalian Neusoft University of Information | University of Queensland",
      icon: dnui,
      iconBg: "#ffffff",
      date: "June 2023 - July 2023",
      points: [
        "Collaborated with 6 Australian & Chinese students on a business venture from scratch.",
        "Coordinated the team’s model deployment and mobile app distribution with AWS. Linked products together via custom REST API.",
        "Developed a business model and pitched our project to staff, students, and industry partners, winning Best Business Value Award.",
      ],
    },
    {
      title: "Casual Academic",
      company_name: "University of Queensland",
      icon: uq,
      iconBg: "#49075e",
      date: "February 2023 - November 2023",
      points: [
        "Personally managed and supported 90 students across 3 project-based third-year level courses.",
        "Evolved my communication skills and own teaching style with demonstrably positive results and feedback.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Aubot",
      icon: aubot,
      iconBg: "#ffffff",
      date: "March 2023 – September 2023",
      points: [
        "Reviewed 100s of Python exercises designed carefully for children aged 10 to 14.",
        "Highlighted errors in quality, relevance, and consistency in all stages of production.",
        "Proposed to the CEO new internal methods and standards to optimise the efficiency of a small, global team.",
      ],
    },
  ],
};
