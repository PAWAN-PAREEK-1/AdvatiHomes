import React from 'react'
import "../Style/Footer.css";
import logo from "../Assets/img/logo.svg";
import call from "../Assets/img/call3.svg";
import mail from "../Assets/img/mail.svg";
import location from "../Assets/img/location.svg";
import facebook from "../Assets/img/facebook.svg";
import instagram from "../Assets/img/insta.svg";
import twitter from "../Assets/img/twit.svg";
import linkdin from "../Assets/img/link.svg";
import logo2 from "../Assets/img/logo5.svg";

const Footer = () => {
  return (
    <div>
        <div className="footer-index">
            <footer>

                <div  className="footer-1">
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
                    <div className="inputs">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <textarea name="" id="" cols="10" rows="5" placeholder='Message'></textarea>
                        <a href=""><h4>Submit</h4></a>
                    </div>
                </div>
                <div className="footer-3">
                    <h1>Social Media</h1>
                    <p>Be the first one to know  about discounts, offers and events</p>
                    <div className="social">
                       <a href=""> <img src={facebook} alt="" /></a>
                       <a href=""> <img src={instagram} alt="" /></a>
                       <a href=""> <img src={twitter} alt="" /></a>
                       <a href=""> <img src={linkdin} alt="" /></a>
                    </div>
                </div>

                <div className="logo">
                    <img src={logo2} alt="" />
                </div>

            </footer>
            <hr />
            <div className="footer-detail">
                
            </div>
        </div>

    </div>
  )
}

export default Footer