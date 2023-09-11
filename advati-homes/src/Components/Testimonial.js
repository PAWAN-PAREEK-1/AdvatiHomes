import React, { useState } from "react";
import "../Style/Testimonial.css";
import t1 from "../Assets/img/t1.svg";
import t2 from "../Assets/img/t2.svg";
import t3 from "../Assets/img/t3.svg";
import star from "../Assets/img/star2.svg";
import tright from "../Assets/img/tright.svg";
import tleft from "../Assets/img/tleft.svg";
import testi from "../Assets/img/testimonial.svg";

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

  // Define the width and height for the center div
  const centerDivStyle = {
    width: "1200px", // Change this to your desired width
    height: "24rem", // Change this to your desired height
  };

  return (
    <div>
      <div className="testi-index">

      <div className="ame-up">
            <h3>Testimonial</h3>
            <h1>What People Are Saying </h1>
          </div>
        <div className="testimonial">
          <img src={tright} alt="" id="tright" onClick={handleNext} />
          <img src={tleft} alt="" id="tleft" onClick={handlePrev} />

          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testi-box ${
                index === 1 ? "center-div" : "" // Add class "center-div" to the center div
              }`}
              style={index === 1 ? centerDivStyle : {}} // Apply the centerDivStyle to the center div
            >
              {index === 1 && (
                <img
                  src={testi}
                  alt=""
                  className="center-image" // Add class "center-image" to the center image
                />
              )}
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
