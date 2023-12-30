import React from "react";

type Props = {
  title: string;
  year: string;
};

const SkillsSubitem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:[8rem]">
      <span className="px-[2rem] text-[#55e6b5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6b5]">
        {year}
      </span>
      <h1 className="mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] capitalize md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        voluptatibus nesciunt, beatae suscipit corporis in eaque perferendis
        impedit voluptas fugit dolorem pariatur facilis laboriosam sint neque
        doloremque provident repellat nostrum?
      </p>
    </div>
  );
};

export default SkillsSubitem;
