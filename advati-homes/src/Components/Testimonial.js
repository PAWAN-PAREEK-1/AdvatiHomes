import React, { useState } from "react";
import "../Style/Testimonial.css";
import t1 from "../Assets/img/t1.svg";
import t2 from "../Assets/img/t2.svg";
import t3 from "../Assets/img/t3.svg";
import star from "../Assets/img/star2.svg";
import tright from "../Assets/img/tright.svg";
import tleft from "../Assets/img/tleft.svg";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      imgSrc: t1,
      name: "Hanna Franci",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: t2,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: t3,
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: t2,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: t1,
      name: "Hanna Franci",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more testimonials here
  ]);

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 < testimonials.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 3
    );
  };

  const displayedTestimonials = testimonials.slice(
    startIndex,
    startIndex + 3
  );

  return (
    <div>
      <div className="testi-index">
        <div className="testimonial">
          <img src={tright} alt="" id="tright" onClick={handleNext} />
          <img src={tleft} alt="" id="tleft" onClick={handlePrev} />

          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testi-box">
              <img src={testimonial.imgSrc} alt="" />
              <img src={star} alt="" />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
