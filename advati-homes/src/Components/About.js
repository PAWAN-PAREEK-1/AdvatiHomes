import React from "react";
import "../Style/About.css";
import aboutbg from "../Assets/img/aboutbg.svg";
import arrow from "../Assets/img/twoarrow.svg";
import right from "../Assets/img/right.svg";
import star from "../Assets/img/start.svg";

const About = () => {
  return (
    <div>
      <div className="about-index">
        <div className="about-main">
          <div className="about-left">
            <img src={aboutbg} alt="" />
            <div className="about-rating">
            <div className="about-box">
              <div className="right-img">
                <img src={right} alt="" />
              </div>
              <h1>4.8</h1>
              <img src={star} alt="" />
              <h3>Trusted on</h3>
              <h2>500+ Reviews</h2>
            </div>
          </div>
          </div>
          <div className="about-right">
            <h4>
              ABOUT US <hr />{" "}
            </h4>
            <h1>
              How much is your <span>property worth now?</span>{" "}
            </h1>
            <p>
              We have built our reputation as true local area experts. We have
              gained more knowledge about buyer interests, our neighborhood and
              the market than any other brand because we live locally and work
              for local people.
            </p>
            <div className="about-points">
              <div className="point-left">
                <h3>
                  <span></span>Care &Comfort{" "}
                </h3>
                <h3>
                  <span></span>Step into One-of-a-kind{" "}
                </h3>
                <h3>
                  <span></span>Now It's Our Turn To Take Care Of You
                </h3>
              </div>
              <div className="point-right">
                <h3>
                  <span></span>All Along You Took Care Ofe Others.{" "}
                </h3>
                <h3>
                  <span></span>Relax and Rejuvenate{" "}
                </h3>
              </div>
            </div>
            <div className="quote-btn  cursor-pointer">
              <a href="">
                Know More
                <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>


          <div className="bg-box"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
