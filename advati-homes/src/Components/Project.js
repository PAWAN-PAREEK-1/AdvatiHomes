import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Style/Project.css";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import arrow from "../Assets/img/twoarrow.svg";
import p1 from "../Assets/img/p1.svg";
import p2 from "../Assets/img/p2.svg";
import p3 from "../Assets/img/p3.svg";

const Project = () => {
  //   const [centerImage, setCenterImage] = useState(0);

  //   const proImages = [
  //     p1, // Replace with your image paths
  //     p1, // Replace with your image paths
  //     p1,
  //     // p3,
  //     // p2,  // Replace with your image paths
  //   ];

  //   const handleImageClick = (index) => {
  //     setCenterImage(index);
  //   };

  return (
    <div>
      <div className="index-project">
        <div className="project">
          <div className="project-up">
            <div className="pro">
              <h2>
                Projects <hr />
              </h2>
              <h1>Our latest Projects (Villas)</h1>
            </div>
            <div className="quote-btn mob-none">
              <a href="">
                View Projects
                <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="project-down">
          <div className="slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={p1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={p2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={p3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={p1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={p2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={p3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
