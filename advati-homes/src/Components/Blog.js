import React from "react";
import "../Style/Blog.css";
import arrow from "../Assets/img/twoarrow.svg";
import i1 from "../Assets/img/i1.svg";
import i2 from "../Assets/img/i2.svg";
import i3 from "../Assets/img/i3.svg";
import smcir from "../Assets/img/smcir.svg";

const Blog = () => {
  return (
    <div>
      <div className="blog-index">
        <div className="blog-main">
          <div className="project-up">
            <div className="pro">
              <h2>
                Get Inspired
                <hr />
              </h2>
              <h1>Our lateSt News & Blog </h1>
            </div>
            <div className="quote-btn">
              <a href="">
                View Projects
                <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
          <div className="left-serv">
            <div className="serv-box">
              <img src={i1} alt="" />
              <div className="serv-icon">
                {/* <img src={ser1} alt="" id='ser-icon' /> */}
                <div className="ins">
                  <div className="ins-img">
                    <h2>
                      Consultation <img src={smcir} alt="" /> Admin{" "}
                    </h2>
                    <p>Choosing the Right Property</p>
                    <div className="date">
                      <h1>25</h1>
                      <h1>jun</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="serv-box">
              <img src={i2} alt="" />
              <div className="serv-icon">
                {/* <img src={ser1} alt="" id='ser-icon' /> */}
                <div className="ins">
                  <div className="ins-img">
                    <h2>
                    Entrepreneur <img src={smcir} alt="" /> Admin{" "}
                    </h2>
                    <p>Market Trends and Insights</p>
                    <div className="date">
                      <h1>12</h1>
                      <h1>aug</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="serv-box">
              <img src={i3} alt="" />
              <div className="serv-icon">
                {/* <img src={ser1} alt="" id='ser-icon' /> */}
                <div className="ins">
                  <div className="ins-img">
                    <h2>
                      Consultation <img src={smcir} alt="" /> Admin{" "}
                    </h2>
                    <p>Homeownership and Maintenance</p>
                    <div className="date">
                      <h1>06</h1>
                      <h1>sep</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
