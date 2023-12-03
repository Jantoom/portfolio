import { fullstack, cloud, game, content } from "../assets";
import { Data } from "./interface";

export const overview: Data = {
  subheadingText: "Introduction",
  headingText: "Overview.",
  description:
    "I'm a growing software developer with interests in \
    artificial intelligence, extended reality, game development, and content creation. \
    I'm a quick learner and I love to collaborate closely with people to \
    design creative, big-picture solutions for real-world problems.",
  content: [
    {
      title: "Game Developer",
      icon: game,
    },
    {
      title: "Content Creator",
      icon: content,
    },
    {
      title: "Full Stack Developer",
      icon: fullstack,
    },
    {
      title: "Cloud Architect",
      icon: cloud,
    },
  ],
};
