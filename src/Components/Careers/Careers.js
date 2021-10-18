import React from "react";
import career from "../../Assets/Images/careers.svg";
import "./Careers.css";

function Careers() {
  return (
    <section className="careers" id="careers">
      <h2 data-aos-duration="2000" data-aos="fade-up">Careers</h2>
      <div className="careers-inner">
        <img src={career} alt="career" />
        <div className="careers-main" data-aos="fade-up">
          <div className="career">
            <h3>MERN Stack Developer</h3>
          </div>
          <div className="career">
            <h3>App Dev(Android/Web App)</h3>
          </div>
          <div className="career">
            <h3>WordPress Developer</h3>
          </div>
          <div className="career">
            <h3>UI/UX Designer</h3>
          </div>
          <div className="career">
            <h3>Content Writer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
