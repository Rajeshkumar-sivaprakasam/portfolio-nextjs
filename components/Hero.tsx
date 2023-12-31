import React from "react";
import Particle from "./Practice";
import { TextEffect } from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[10vh]">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-white font-bold text-[35px] md:text-[50px]">
            HI, I&apos;M &nbsp;
            <span className="text-yellow-300">Rajeshkumar Sivaprakasam</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            I bring three years of expertise as a React MERN stack developer,
            adept at architecting responsive and intuitive user interfaces using
            React.js. My proficiency extends to crafting robust backend systems
            with MongoDB, Express, and Node.js, enabling the creation of
            scalable and dynamic full-stack applications. I specialize in
            leveraging the MERN stack&apos;s capabilities to deliver efficient
            and user-centric solutions
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 p-[1rem] text-[18px] font-bold uppercase bg-[#55e6b5] 
            text-black flex items-center space-x-2"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] transition-all duration-200 font-semibold hover:text-yellow-400 text-[#55e6b5]" />
              <p className="text-[20px] font-semibold text-white">
                Watch The video
              </p>
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6b5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
