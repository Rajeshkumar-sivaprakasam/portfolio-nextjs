import React from "react";
import TestimonialSlider from "./TestimonialSlider";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Client <span className="text-yellow-400">Review</span>
      </h1>
      <div className="mx-auto pt-[5rem] pb-[4rem] w-[80%]">
        {/* testimonial slider */}
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
