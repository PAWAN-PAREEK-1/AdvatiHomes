import React from 'react';
import "../Style/Amenities.css";
import am1 from "../Assets/img/am1.svg";
import am2 from "../Assets/img/am2.svg";
import am3 from "../Assets/img/am3.svg";
import am4 from "../Assets/img/am4.svg";
import am5 from "../Assets/img/am5.svg";
import am6 from "../Assets/img/am6.svg";

const amenitiesData = [
  { image: am1, title: "Play Ground" },
  { image: am2, title: "Swimming Pool" },
  { image: am3, title: "Gym" },
  { image: am4, title: "Clubhouse" },
  { image: am5, title: "Park" }
];

const Amenities = () => {
  return (
    <div>
      <div className="ame-index">
        <div className="amenities">
          <div className="ame-up">
            <h3>Our Amenities</h3>
            <h1>Everything You Need</h1>
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
            <div className="ame-detail">
                <h1>Your Happy Place Awaits!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc orci, scelerisque laoreet ante sit amet, iaculis congue sem. Morbi maximus ornare nulla, cursus hendrerit enim elementum at. Quisque sed tortor sit amet nisi euismod posuere. Morbi eu porta mi. Nullam nec molestie urna, a semper tortor. In hac habitasse platea dictumst. Suspendisse potenti.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
