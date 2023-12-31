import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Ject</span>
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-[80%] pt-[2rem]">
        {/* project 1 */}
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/p2.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        {/* project 2 */}
        <div data-aos="fade-up" data-ios-delay="300">
          <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/p3.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        {/* project 3 */}
        <div data-aos="fade-up" data-ios-delay="600">
          <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/p1.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
