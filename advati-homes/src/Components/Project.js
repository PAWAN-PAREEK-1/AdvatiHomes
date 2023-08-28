import React from 'react'
import "../Style/Project.css";
import arrow from "../Assets/img/twoarrow.svg";
import p1 from "../Assets/img/p1.svg";
import p2 from "../Assets/img/p2.svg";
import p3 from "../Assets/img/p3.svg";


const Project = () => {
  return (
    <div>
        <div className="index-project">
            <div className="project">
                <div className="project-up">


                    <div className="pro">
                    <h2>Projects <hr /></h2>
                    <h1>Our latest Projects (Villas)</h1>
                    </div>

                    <div className="quote-btn  ">
              <a href="">
              View Projects
                <img src={arrow} alt="" />{" "}
              </a>
            </div>


                </div>


            </div>
            <div className="project-down">
                  <div className="pro-img">

                  </div>
                  <div className="pro-img">

                  </div>
                  <div className="pro-img">

                  </div>


                </div>

        </div>
    </div>
  )
}

export default Project