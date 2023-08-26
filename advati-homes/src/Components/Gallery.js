import React, { useState, useRef } from 'react';
import "../Style/Gallery.css";
import right from "../Assets/img/rightarrow.svg";
import left from "../Assets/img/leftarrow.svg";
import a1 from "../Assets/img/a1.svg";
import a2 from "../Assets/img/a2.svg";
import a3 from "../Assets/img/a3.svg";
import a4 from "../Assets/img/a4.svg";
import rightarrow from "../Assets/img/grightsvg.svg";

const Gallery = () => {
  const images = [a1, a2, a3, a4, a2, a3, a4];
  const imageRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNextClick = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      setScrollPosition(scrollPosition + 200);
    }
  };

  const handlePrevClick = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      setScrollPosition(scrollPosition - 200);
    }
  };

  return (
    <div>
      <div className="gallery-index">
        <div className="gallery-up">
          <div className="gallery-head">
            <h3>Gallery <hr /></h3>
            <h1>Our Recent Projects</h1>
          </div>
          <div className="navigation">
            <img onClick={handlePrevClick} src={left} alt="Left Arrow" />
            <img onClick={handleNextClick} src={right} alt="Right Arrow" />
          </div>
        </div>
        <div className="gallery-down" ref={imageRef}>
          <div className="image-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {images.map((image, index) => (
              <div className="image-wrapper" key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="gallery-image"
                />
                <div className="image-tooltip"><h2>Learn more <img src={rightarrow} alt="" /> </h2></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
