import React, { useState } from 'react';
import "../Style/Project.css";
import arrow from "../Assets/img/twoarrow.svg";
import p1 from "../Assets/img/p1.svg";
import p2 from "../Assets/img/p2.svg";
import p3 from "../Assets/img/p3.svg";

const Project = () => {
  const [centerImage, setCenterImage] = useState(0);

  const proImages = [
    p1, // Replace with your image paths
    p1, // Replace with your image paths
    p1,
    // p3,
    // p2,  // Replace with your image paths
  ];

  const handleImageClick = (index) => {
    setCenterImage(index);
  };

  return (
    <div>
      <div className="index-project">
        <div className="project">
          <div className="project-up">
            <div className="pro">
              <h2>Projects <hr /></h2>
              <h1>Our latest Projects (Villas)</h1>
            </div>
            <div className="quote-btn">
              <a href="">
                View Projects
                <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="project-down">
          <div className="slider">
            <div className="slider-images">
              {proImages.map((image, index) => (
                <div
                  key={index}
                  className={`slider-img ${centerImage === index ? 'center' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => handleImageClick(index)}
                ></div>
              ))}
            </div>
            <div className="slider-navigation">
              {proImages.map((image, index) => (
                <div
                  key={index}
                  className={`slider-nav ${centerImage === index ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
