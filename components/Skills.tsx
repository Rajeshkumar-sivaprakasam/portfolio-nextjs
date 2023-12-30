import React from "react";
import SkilsSubitem from "./SkillsSubitem";
import SkillLanguages from "./SkillLanguages";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="mx-auto w-[80%] pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsSubitem title="React Develpoer" year="2014 - 2018" />
          <SkilsSubitem title="Next Develpoer" year="2016 - 2020" />
          <SkillLanguages
            skills={["html", "css", "javascript"]}
            levels={["w-[91%]", "w-[88%]", "w-[80%]"]}
          />
        </div>
        <div>
          <SkilsSubitem title="React Develpoer" year="2014 - 2018" />
          <SkilsSubitem title="React Develpoer" year="2021 - 2023" />
          <SkillLanguages
            skills={["React js", "Next js", "TypeScript"]}
            levels={["w-[91%]", "w-[88%]", "w-[80%]"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
