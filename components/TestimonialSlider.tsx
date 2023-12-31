import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

type Props = {};

const TestimonialSlider = (props: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      {/* client review */}
      <ClientReview
        image="/images/c1.jpg"
        name="Sajal Talukder"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Talukder"
        role="React Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="Anas"
        role="MERN Stack Developer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Rakibul Anas"
        role="Nextjs Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
