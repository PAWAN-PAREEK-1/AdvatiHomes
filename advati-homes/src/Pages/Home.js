import React from 'react'
import { useRef, useState ,lazy, Suspense } from "react";
import "../Style/Home.css";
import shadebg from "../Assets/img/smallherobg.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import bg from "../Assets/img/herobg.svg";
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
            <Navbar/>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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