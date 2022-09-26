import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SectionHeader from "./SectionHeader";

export const Skills = () => {
  const iconSize = 75;
  return (
    <section className="container mx-auto h-screen">
      <DarkGradientSVG />

      <SectionHeader title="What I'm Good With" />

      <div className="skill-icons flex flex-col space-between w-full justify-center gradient-icon">
        <SkillSelector
          icon={<SiTypescript className="dark-gradient-fill" size={iconSize} />}
          skill="Typescript"
        />
        <SkillSelector
          icon={
            <TbBrandNextjs className="dark-gradient-stroke" size={iconSize} />
          }
          skill="NextJs"
        />
        <SkillSelector
          icon={<FaReact className="dark-gradient-fill" size={iconSize} />}
          skill="React"
        />
        <SkillSelector
          icon={<FaNodeJs className="dark-gradient-fill" size={iconSize} />}
          skill="NodeJs"
        />
        <SkillSelector
          icon={
            <SiTailwindcss className="dark-gradient-fill" size={iconSize} />
          }
          skill="Tailwind"
        />
      </div>
    </section>
  );
};

const SkillSelector = ({
  icon,
  skill,
}: {
  icon: React.ReactNode;
  skill: string;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-shrink">{icon}</div>
      <span className="flex-grow font-thin text-7xl uppercase">{skill}</span>
    </div>
  );
};

const DarkGradientSVG = () => {
  return (
    <svg width="0" height="0">
      <linearGradient
        id="dark-gradient"
        x1="100%"
        y1="100%"
        x2="0%"
        y2="0%"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6dd5ed" offset="0%" />
        <stop stopColor="#2193b0" offset="100%" />
      </linearGradient>
    </svg>
  );
};

export default Skills;
