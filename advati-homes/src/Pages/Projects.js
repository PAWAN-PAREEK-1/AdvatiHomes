import React from "react";
import { lazy, Suspense, useState, useEffect } from "react";
import mouse from "../Assets/img/mouse.svg";
import "../Style/Global.css";
import shadebg from "../Assets/img/smallherobg.svg";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Gallery = lazy(() => import("../Components/Gallery"));
const Amenities = lazy(() => import("../Components/Amenities"));
const Footer = lazy(() => import("../Components/Footer"));
const Project = lazy(() => import("../Components/Project"));

const Projects = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      setTimeout(() => {
        setScrolled(false);
      }, 1000000);
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
    <div>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
        >
        <div className="all-hero">
          <Navbar activeUrl={"/Projects"} />

          {!scrolled && (
            <div className="all-mouse">
              <img src={mouse} alt="" onClick={handleReturnToTop} />
            </div>
          )}

          <div className="all-swiper-details">
            <h1>projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium mollis feugiat. Aenean sed fermentum orci, accumsan
              feugiat justo.{" "}
            </p>
          </div>

          <div className="all-bg-hero">
            <img src={shadebg} alt="" />
          </div>
        </div>


        <Gallery />
        <Amenities />
        <Project/>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Projects;
