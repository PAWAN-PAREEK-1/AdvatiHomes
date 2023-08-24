import React from 'react'
import { lazy, Suspense } from "react";
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



            </div>



    </div>


    </Suspense>
  )
}

export default Home