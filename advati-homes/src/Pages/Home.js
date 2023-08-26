import React from 'react'
import { useRef, useState ,lazy, Suspense } from "react";
import "../Style/Home.css";
import shadebg from "../Assets/img/smallherobg.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import bg from "../Assets/img/herobg.svg";
import bg2 from "../Assets/img/herobg2.svg";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));

const Home = () => {
  return (
    <Suspense
    fallback={
      <div>
        <Loading />
      </div>
    }>




    <div>
            <div className="index-hero">
            <Navbar activeUrl={"/"}/>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
       
      </Swiper>


              <div className="bg-hero">
                <img src={shadebg} alt="" />
              </div>

            </div>



    </div>


    </Suspense>
  )
}

export default Home