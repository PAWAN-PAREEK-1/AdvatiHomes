import React from 'react'
import { lazy, Suspense } from "react";
import "../Style/Home.css";
import shadebg from "../Assets/img/smallherobg.svg";
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

              <div className="bg-hero">
                <img src={shadebg} alt="" />
              </div>

            </div>



    </div>


    </Suspense>
  )
}

export default Home