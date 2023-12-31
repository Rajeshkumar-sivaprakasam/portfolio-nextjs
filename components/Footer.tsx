import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] border-b-[1px] pb-[6rem]">
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] rounded-full bg-[#55e5b5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="font-semibold text-white text-[25px] mb-[0.2rem]">
              Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Lorem, Ipsum dolor sit
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] rounded-full bg-[#55e5b5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="font-semibold text-white text-[25px] mb-[0.2rem]">
              Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              7667681427
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] rounded-full bg-[#55e5b5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="font-semibold text-white text-[25px] mb-[0.2rem]">
              Send us mail
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              rajeshisadev@gmail.com <br />
              rk.sivaprakasam@outlook.com
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between w-[80%] mt-[2rem]">
        <div className="text-white text-[16px] mb-[2rem] md:mb-0  opacity-20">
          Info thamizha | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-white opacity-20 text-[18px]">
            Terms & Conditions
          </p>
          <p className="text-white opacity-20 text-[18px]">Privacy Policy</p>
          <p className="text-white opacity-20 text-[18px]">Site map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
