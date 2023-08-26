import React from 'react'
import "../Style/Services.css";
import s1 from "../Assets/img/s1.svg";
import s2 from "../Assets/img/s2.svg";
import s3 from "../Assets/img/s3.svg";
import s4 from "../Assets/img/s4.svg";

const Services = () => {
  return (
    <div>
        <div className="ser">
        <div className="service">
        <div className="index-service">
            <div className="right-serv">
                        <h3>What We Do</h3>
                        <h1>Our Services</h1>
            </div>
            <div className="left-serv">

                <div className="serv-box">
                    <img src={s1} alt="" />
                </div>
                <div className="serv-box">
                    <img src={s2} alt="" />
                </div>
                <div className="serv-box">
                    <img src={s3} alt="" />
                </div>
                <div className="serv-box">
                    <img src={s4} alt="" />
                </div>

            </div>

        </div>


        <div className="bg-box3">

</div>

        </div>
        </div>

    </div>
  )
}

export default Services