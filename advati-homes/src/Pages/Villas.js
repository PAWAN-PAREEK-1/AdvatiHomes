import React from "react";
import { lazy, Suspense, useState, useEffect } from "react";
import mouse from "../Assets/img/mouse.svg";
import "../Style/About.css";
import "../Style/Global.css";
import arrow from "../Assets/img/twoarrow.svg";
import shadebg from "../Assets/img/smallherobg.svg";
import am1 from "../Assets/img/ace.svg";
import am2 from "../Assets/img/club.svg";
import am3 from "../Assets/img/com.svg";
import am4 from "../Assets/img/park.svg";
import am6 from "../Assets/img/am6.svg";
import bag from "../Assets/img/bag.svg";
import home1 from "../Assets/img/h1.svg";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Footer = lazy(() => import("../Components/Footer"));

const Villas = () => {
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

  const amenitiesData = [
    { image: am1, title: "Play Ground" },
    { image: am2, title: "Clubhouse" },
    { image: am3, title: "Community Living" },
    { image: am4, title: "Parks" },
  ];

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
          <Navbar activeUrl={"/Villas"} />

          {!scrolled && (
            <div className="all-mouse">
              <img src={mouse} alt="" onClick={handleReturnToTop} />
            </div>
          )}

          <div className="all-swiper-details">
            <h1>Villas</h1>
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

        <div className="ame-villas">
          <div className="ame-index">
            <div className="amenities">
              <div className="ame-up">
                <h3>welcome home</h3>
                <h1>Advait Villas - your new address for a peaceful life.</h1>
              </div>
              <div className="ame-down">
                {amenitiesData.map((amenity, index) => (
                  <div className="down-1" key={index}>
                    <div className="ame-icon">
                      <img src={amenity.image} alt="" />
                      <h3>{amenity.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ame-main">
                <img src={am6} alt="" />
                <div className="ame-detail villa-detail">
                  <h1>Starting @2.9 Cr. at Jayadarsini, Medchal</h1>
                  <div className="about-points">
                    <div className="point-left">
                      <h3>
                        <span></span>Conveniently located on the north-side of
                        Medchal (NH-44){" "}
                      </h3>
                      <h3>
                        <span></span>Medchal has emerged as a rapidly expanding
                        residential area in Hyderabad's thriving north zone,
                        given its proximity to Kompally and Secunderabad's
                        commercial centers{" "}
                      </h3>
                      <h3>
                        <span></span>Unmatched living experience amid excellent
                        social infrastructure, including renowned schools,
                        hospitals, and shopping complexes
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="neb-index">
          <div className="neb-left">
            <h1>Your Neighbourhood</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis dui vel enim porta, euismod scelerisque massa feugiat.
              Integer in ipsum eu nunc porta sollicitudin. Donec id purus odio.
              Ut sed cursus arcu. Nullam faucibus in eros eget vehicula. Donec
              pulvinar tellus tincidunt sagittis fringilla.
            </p>
            <div className="quote-btn cursor-pointer">
              <a href="">
                Learn More <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
          <div className="neb-right"></div>

          <div className="neb-detail">
            <div className="neb-box">
              <img src={bag} alt="" />
              <h1>IT/Corporats</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>IKP Knowledge Park{" "}
                  </h3>
                  <h3>
                    <span></span>Biological E Limited{" "}
                  </h3>
                  <h3>
                    <span></span>Bayer CropScience Limited
                  </h3>
                </div>
              </div>
            </div>
            <div className="neb-box">
              <img src={bag} alt="" />
              <h1>Education</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>CMR Institute of Technology{" "}
                  </h3>
                  <h3>
                    <span></span>TSRTC Transport Academy{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="neb-box">
              <img src={bag} alt="" />
              <h1>Hospital</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>Pragnya Super Speciality Hospital - 10 mins{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="neb-box">
              <img src={bag} alt="" />
              <h1>Entertainment</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>Asian Mukund A/C Theatre{" "}
                  </h3>
                  <h3>
                    <span></span>Medchal Cricket Arena{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="neb-box">
              <img src={bag} alt="" />
              <h1>Connectivity</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>Medchal Bus Station{" "}
                  </h3>
                  <h3>
                    <span></span>Shopping Center{" "}
                  </h3>
                  <h3>
                    <span></span>Railway Station
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floor-index">
          <div className="floor-up">
            <h1>Floor Plans</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet eros eu mi feugiat feugiat. Quisque a sodales neque.
              Pellentesque habitant
            </p>
          </div>
          <div className="floor-down">
            <div className="floor-box">
              <img src={home1} alt="" />

              <h1>3 BHK East-facing Duplex Villas</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>A lounge (with covered terrace){" "}
                  </h3>
                  <h3>
                    <span></span>2 Bedrooms (1 with a dressing area and covered
                    terrace){" "}
                  </h3>
                  <h3>
                    <span></span>Puja room{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="floor-box">
              <img src={home1} alt="" />

              <h1>3 BHK East-facing Duplex Villas</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>Lounge area with sit out{" "}
                  </h3>
                  <h3>
                    <span></span>2 bedrooms with attached bath (including a sit out for 1 of the bedrooms){" "}
                  </h3>

                </div>
              </div>
            </div>
            <div className="floor-box">
              <img src={home1} alt="" />

              <h1>4 BHK East-facing Duplex Villas</h1>
              <div className="about-points villa-point">
                <div className="point-left">
                  <h3>
                    <span></span>2 bedrooms (1 with an attached sit out){" "}
                  </h3>
                  <h3>
                    <span></span>Lounge area with an attached sit out{" "}
                  </h3>
                  <h3>
                    <span></span>Puja room{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Villas;
