import React from 'react'
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));

const About = () => {
  return (


    <div>
       <Suspense
    fallback={
      <div>
        <Loading />
      </div>
    }>

<Navbar activeUrl={"/About"}/>
      About

      </Suspense>

      </div>
  )
}

export default About