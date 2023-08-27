import React from 'react'
import "../Style/Services.css";
import s1 from "../Assets/img/s1.svg";
import s2 from "../Assets/img/s2.svg";
import s3 from "../Assets/img/s3.svg";
import s4 from "../Assets/img/s4.svg";
import ser1 from "../Assets/img/med.svg";
import ser2 from "../Assets/img/call2.svg";
import ser3 from "../Assets/img/med2.svg";
import ser4 from "../Assets/img/med3.svg";

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
                    <div className="serv-icon">
                    <img src={ser1} alt="" id='ser-icon' />
                   <a href=""><div className="serv-img">


                        <h2>Medical Services</h2>
                        <p>Medical checkup & Maintaining Health Records</p>
                        <h4>Learn more</h4>
                        </div></a>
                    </div>
                </div>
                <div className="serv-box">
                    <img src={s2} alt="" />
                    <div className="serv-icon">
                    <img src={ser2} alt="" id='ser-icon' />
                  <a href="">  <div className="serv-img">


                        <h2>Personal Services</h2>
                        <p>Advisory services on legal, financial & Insurance issues</p>
                        <h4>Learn more</h4>
                        </div></a>
                    </div>
                </div>
                <div className="serv-box">
                    <img src={s3} alt="" />
                    <div className="serv-icon">
                    <img src={ser3} alt="" id='ser-icon' />
                   <a href=""> <div className="serv-img">


                        <h2>Security Services</h2>
                        <p>All-round compound wall with Solar fencing</p>
                        <h4>Learn more</h4>
                        </div>
                        </a>
                    </div>
                </div>
               <div className="serv-box">
                    <img src={s4} alt="" />
                    <div className="serv-icon">
                    <img src={ser4} alt="" id='ser-icon' />
                    <a href=""> <div className="serv-img">


                        <h2>Event Services</h2>
                        <p>Birthday celebrations, Wedding anniversaries</p>
                        <h4>Learn more</h4>
                        </div></a>
                    </div>
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