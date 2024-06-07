import {
  typescript,
  reactjs,
  nodejs,
  git,
  python,
  tensorflow,
  flask,
  docker,
  terraform,
  aws,
  csharp,
  unity,
  unreal,
} from "../assets";
import { Data } from "./interface";

export const technologies: Data = {
  content: [
    {
      name: "TypeScript",
      icon: typescript,
      serviceIds: [0]
    },
    {
      name: "React JS",
      icon: reactjs,
      serviceIds: [0]
    },
    {
      name: "Node JS",
      icon: nodejs,
      serviceIds: [0, 1]
    },
    {
      name: "Python",
      icon: python,
      serviceIds: [0, 2]
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
      serviceIds: [2]
    },
    {
      name: "Flask",
      icon: flask,
      serviceIds: [0, 1]
    },
    {
      name: "Docker",
      icon: docker,
      serviceIds: [0, 1]
    },
    {
      name: "Terraform",
      icon: terraform,
      serviceIds: [0, 1]
    },
    {
      name: "AWS",
      icon: aws,
      serviceIds: [0, 1]
    },
    {
      name: "C#",
      icon: csharp,
      serviceIds: [0, 3]
    },
    {
      name: "Unity",
      icon: unity,
      serviceIds: [3]
    },
    {
      name: "Unreal",
      icon: unreal,
      serviceIds: [3]
    },
  ],
};
