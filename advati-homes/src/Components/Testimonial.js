import React from "react";
import "../Style/Testimonial.css";
import t1 from "../Assets/img/t1.svg";
import t2 from "../Assets/img/t2.svg";
import t3 from "../Assets/img/t3.svg";
import star from "../Assets/img/star2.svg";
import testi from "../Assets/img/testi.svg";
import tright from "../Assets/img/tright.svg";
import tleft from "../Assets/img/tleft.svg";

const Testimonial = () => {
  return (
    <div>
      <div className="testi-index">
        <div className="testimonial">
            <img src={tright} alt="" id="tright"/>
            <img src={tleft} alt="" id="tleft" />

          <div className="testi-box">
            <img src={t1} alt="" />
            <img src={star} alt="" />
            <h3>Hanna Franci</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>

          </div>
          <div className="testi-box testi-center">
            <img src={t1} alt="" />
            <img src={star} alt="" />
            <h3>Hanna Franci</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <img src={testi} alt="" id="testi" />
          </div>
          <div className="testi-box">
            <img src={t1} alt="" />
            <img src={star} alt="" />
            <h3>Hanna Franci</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis nulla interdum orci congue rlibero. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
