import {
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div className="pt-[4rem] md:[pt-8rem] pd-[5rem] bg-[#121121]">
      <p className="heading">
        My<span className="text-yellow-400"> Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white text-center pb-[2rem]">
        <div
          data-aos="fade-right"
          className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6"
        >
          <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">
            Frontend
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quibusdam, ratione recusandae et, aliquam perferendis
              sunt saepe aspernatur porro veritatis enim perspiciatis distinctio
              officia ex placeat! Tempora commodi earum voluptatum.
            </p>
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 text-center"
        >
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">
            Frontend
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quibusdam, ratione recusandae et, aliquam perferendis
              sunt saepe aspernatur porro veritatis enim perspiciatis distinctio
              officia ex placeat! Tempora commodi earum voluptatum.
            </p>
          </h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 text-center"
        >
          <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">
            Frontend
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quibusdam, ratione recusandae et, aliquam perferendis
              sunt saepe aspernatur porro veritatis enim perspiciatis distinctio
              officia ex placeat! Tempora commodi earum voluptatum.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
