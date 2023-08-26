import React from 'react'
import "../Style/Gallery.css";
import right from "../Assets/img/rightarrow.svg";
import left from "../Assets/img/leftarrow.svg";
import a1 from "../Assets/img/a1.svg";
import a2 from "../Assets/img/a2.svg";
import a3 from "../Assets/img/a3.svg";
import a4 from "../Assets/img/a4.svg";

const Gallery = () => {
  return (
    <div>
        <div className="gallery-index">
                <div className="gallery-up">
                    <div className="gallery-head">
                            <h3>Gallary <hr /></h3>
                            <h1>Our Recent Projects</h1>
                    </div>
                    <div className="navigation">
                        <a href=""><img src={left} alt="" /></a>
                       <a href=""> <img src={right} alt="" /></a>
                    </div>

                </div>
                <div className="gallery-down">
                <img src={a1} alt="" />
                <img src={a2} alt="" />
                <img src={a3} alt="" />
                <img src={a4} alt="" />
                <img src={a2} alt="" />
                <img src={a2} alt="" />
                <img src={a3} alt="" />
                <img src={a4} alt="" />
                <img src={a2} alt="" />


                </div>
        </div>
    </div>
  )
}

export default Gallery