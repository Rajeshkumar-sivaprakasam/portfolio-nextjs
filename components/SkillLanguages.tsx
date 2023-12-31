import React from "react";

type Props = {
  skills: string[];
  levels: string[];
};

const SkillLanguages = ({ skills, levels }: Props) => {
  const [skill1, skill2, skill3] = skills;
  const [level1, level2, level3] = levels;
  console.log("level1", level1);
  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <div key={index} className="relative mb-[3rem]">
            <h1 className="p-5 w-[100%] uppercase bg-gray-800 text-white text-[20px] font-bold">
              {skill}
            </h1>
            <span
              className={`${levels[index]} bottom-0 h-[6px] bg-[#55e6a5] absolute`}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillLanguages;
