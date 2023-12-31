import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        My
        <span className="text-yellow-400">BLOG</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
          {/* blog 1 */}
          <div>
            <div className="relative h-[400px] w-[100%]">
              <Image
                src="/images/blog3.jpg"
                alt="blog"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]">
              <div className="w-fit px-[2rem] py-[2rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 10, 2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">By Sajal</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">Comments (12)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                Next js New Features
              </p>
            </div>
          </div>
          {/* blog 2 */}
          <div>
            <div className="relative h-[400px] w-[100%]">
              <Image
                src="/images/blog1.jpg"
                alt="blog"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]">
              <div className="w-fit px-[2rem] py-[2rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 18, 2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">By Sajal</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">Comments (12)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                React js New Features
              </p>
            </div>
          </div>
          {/* blog 3 */}
          <div>
            <div className="relative h-[400px] w-[100%]">
              <Image
                src="/images/blog2.jpg"
                alt="blog"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]">
              <div className="w-fit px-[2rem] py-[2rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 10, 2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">By Sajal</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                  <p className="text-white text-[17px]">Comments (12)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-white text-[18px] font-semibold">
                Node js New Features
              </p>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Blog;
