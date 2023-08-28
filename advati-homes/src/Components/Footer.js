import React from 'react'
import "../Style/Footer.css";
import logo from "../Assets/img/logo.svg";
import call from "../Assets/img/call3.svg";
import mail from "../Assets/img/mail.svg";
import location from "../Assets/img/location.svg";

const Footer = () => {
  return (
    <div>
        <div className="footer-index">
            <footer>

                <div className="footer-1">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget turpis ut erat congue tempor eu ac dolor. Sed imperdiet ligula vel cursus volutpat. <span>Read More</span></p>
                    <a href=""><h2><img src={call}  alt="" />
                    (406) 555-0120</h2></a>
                    <a href=""><h2><img src={mail}  alt="" />
                    megacoding123@gmail.com</h2></a>
                    <a href=""><h2><img src={location}  alt="" />
                    A-706, RJD Business Hub Opp. Naginawadi Road, Katargam 395004, Surat, Gujarat, India</h2></a>
                </div>


                <div className="footer-2">
                    <h1>Contact us</h1>
                    <p>We usually respond before 24 hours.</p>
                </div>

            </footer>
        </div>

    </div>
  )
}

export default Footer