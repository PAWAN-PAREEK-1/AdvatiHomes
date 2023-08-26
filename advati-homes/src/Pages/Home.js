import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import "../Style/Home.css";
import shadebg from "../Assets/img/smallherobg.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import bg from "../Assets/img/herobg.svg";
import bg2 from "../Assets/img/herobg2.svg";
import arrow from "../Assets/img/twoarrow.svg";
import mouse from "../Assets/img/mouse.svg";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Aboutus = lazy(() => import("../Components/About"));

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      setTimeout(() => {
        setScrolled(false);
      }, 50000);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleReturnToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrolled(false);
  };

  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <div className="index-hero">
          <Navbar activeUrl={"/"} />
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={bg2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
          </Swiper>

          <div className="swiper-details">
            <h1>Welcome to Advait Homes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium mollis feugiat. Aenean sed fermentum orci, accumsan feugiat justo. </p>
            <div className="quote-btn quote-btn2 cursor-pointer">
              <a href="">Get Quotes <img src={arrow} alt="" /> </a>
            </div>
          </div>

          {!scrolled && (
            <div className="mouse">
              <img src={mouse} alt="" onClick={handleReturnToTop} />
            </div>
          )}

          <div className="bg-hero">
            <img src={shadebg} alt="" />
          </div>
        </div>

        <Aboutus/>
      </div>
    </Suspense>
  );
}

export default Home;
