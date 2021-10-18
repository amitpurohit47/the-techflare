import React from "react";
import web from "../../Assets/Images/web.png";
import hosting from "../../Assets/Images/hosting.png";
import softwareEngineering from "../../Assets/Images/software-engineering.png";
import social from "../../Assets/Images/social.png";
import mobile from "../../Assets/Images/mobile.png";
import webDesign from "../../Assets/Images/web-design.png";
import websiteapp from "../../Assets/Images/websiteapp.png";
import saas from "../../Assets/Images/saas.png";
import industry from "../../Assets/Images/industry.png";
import Techs from "../Techs/Techs";
import "./Services.css";

function Services() {
  return (
    <div className="services" id="services">
      <h2 data-aos="fade-up" data-aos-duration="2000">
        Services
      </h2>
      <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={web} alt="do" />
            <p>Create Websites</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={hosting} alt="do" />
            <p>Hosting</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={softwareEngineering} alt="do" />
            <p>Software Engineering & Consulting</p>
          </div>
        </div>
      </div>
      <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={social} alt="do" />
            <p>Social Media Marketing</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
          <img src={mobile} alt="do" />
            <p>Mobile Applications</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={webDesign} alt="do" />
            <p>Design</p>
          </div>
        </div>
      </div>
      <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={websiteapp} alt="do" />
            <p>Web Applications</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={saas} alt="do" />
            <p>SaaS</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={industry} alt="do" />
            <p>Industry 4.0 Solutions</p>
          </div>
        </div>
      </div>
      <Techs />
    </div>
  );
}

export default Services;
