import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000] bg-[#09101a]`}
    >
      <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">Services</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Projects</div>
        <div className="nav-link-mobile">Blog</div>
        <div className="nav-link-mobile">Contact</div>
        <div
          onClick={closeNav}
          className="absolute cursor-poiner top-[2rem] right-[2rem] h-[2rem] w-[2rem] text-yellow-300"
        >
          <XMarkIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
