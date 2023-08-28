import React, { useState, useEffect } from "react";
import "../Style/Testimonial.css";
import t1 from "../Assets/img/t1.svg";
import t2 from "../Assets/img/t2.svg";
import t3 from "../Assets/img/t3.svg";
import star from "../Assets/img/star2.svg";
import testi from "../Assets/img/testi.svg";
import tright from "../Assets/img/tright.svg";
import tleft from "../Assets/img/tleft.svg";

const testimonials = [
    {
      imgSrc: t1,
      name: "Hanna Franci",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: "../Assets/img/t2.svg",
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: "../Assets/img/t3.svg",
      name: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
      <div>
        <div className="testi-index">
          <div className="testimonial">
            <img src={tright} alt="" id="tright" onClick={handleNext} />
            <img src={tleft} alt="" id="tleft" onClick={handlePrev} />

            <div className="testi-box">
              <img src={currentTestimonial.imgSrc} alt="" />
              <img src={star} alt="" />
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.content}</p>
            </div>
            <div className="testi-box testi-center">
              <img src={currentTestimonial.imgSrc} alt="" />
              <img src={star} alt="" />
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.content}</p>
            </div>
            <div className="testi-box">
              <img src={currentTestimonial.imgSrc} alt="" />
              <img src={star} alt="" />
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Testimonial;