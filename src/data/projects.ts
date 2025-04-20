import {
  games,
  songtrax,
  patternflow,
  dijo,
  popo,
  jumpsitters,
  retroactive,
  urbantry,
} from "../assets";
import { Data } from "./interface";

export const projects: Data = {
  subheadingText: "My work",
  headingText: "Projects.",
  description:
    "These projects showcase my skills & experience as a software developer & team member. \
    Each one is given a short description of what it is, with some key technologies mentioned. \
    You can click on the GitHub icons to see the repositories.",
  content: [
    {
      name: "Games Suite",
      description:
        "A collection of games that I have created, including Minesweeper, Sudoku, and a few others. \
        Each game has its own unique features and gameplay mechanics, and they are all built using React and TypeScript.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "zustand",
          color: "green-text-gradient",
        },
      ],
      image: games,
      source_code_link: "https://github.com/Jantoom/games",
    },
    {
      name: "Urbantry",
      description:
        "A mobile AR application that empowers locals to creatively & collaboratively express themselves with urban planners on future developments. User edits add branches to a navigable contribution tree, enriching community engagement documentation.",
      tags: [
        {
          name: "csharp",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "mobile",
          color: "pink-text-gradient",
        },
        {
          name: "ar",
          color: "blue-text-gradient",
        },
      ],
      image: urbantry,
      source_code_link: "https://github.com/Jantoom/urbantry",
    },
    {
      name: "SongTrax",
      description:
        "Web application that allows users to create, preview, and share audio samples to locations. Mobile application uses GPS to find nearby samples and allows users to play and rate them.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "reactweb",
          color: "green-text-gradient",
        },
        {
          name: "reactnative",
          color: "pink-text-gradient",
        },
      ],
      image: songtrax,
      source_code_link: "https://github.com/Jantoom/songtrax",
    },
    {
      name: "JumpSitters",
      description:
        "A fun multiplayer arcade game which leverages physical activity and team coordination. I was responsible for most of the Unity and Arduino code.",
      tags: [
        {
          name: "csharp",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "arduino",
          color: "pink-text-gradient",
        },
      ],
      image: jumpsitters,
      source_code_link: "https://github.com/Jantoom/DECO3801-Team-Mono-2022",
    },
    {
      name: "RETROACTIVE",
      description:
        "A fast-paced 8-bit game where you must do chores and go to bed before Mum gets back from work. I wrote the map generation & interaction systems, as well as some storytelling and UI features.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "libgdx",
          color: "green-text-gradient",
        },
        {
          name: "algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: retroactive,
      source_code_link: "https://github.com/Jantoom/retroactive",
    },
    {
      name: "Dijo",
      description:
        "A journalling web app that lets users create pages, add UI elements, and upload assets to a marketplace. I was responsible for the backend and infrastructure code.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
        {
          name: "terraform",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
      ],
      image: dijo,
      source_code_link: "https://github.com/Jantoom/dijo",
    },
    {
      name: "Popo",
      description:
        "A reporting service that lets users earn commission from parking infringements. I was responsible for the backend and infrastructure code.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
        {
          name: "terraform",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
      ],
      image: popo,
      source_code_link: "https://github.com/Jantoom/team-popo-2023",
    },
    {
      name: "PatternFlow",
      description:
        "Report on image segmentation of a dataset using Improved UNet. Model was evaluated on dice coefficient and visual comparison of predicted and actual classifications. Trained on a HPC cluster.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "slurm",
          color: "pink-text-gradient",
        },
      ],
      image: patternflow,
      source_code_link: "https://github.com/Jantoom/patternflow",
    },
  ],
};
