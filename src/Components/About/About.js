import React, { useEffect } from "react";
import aboutimg from "../../Assets/Images/about1.jpg";
import vision from "../../Assets/Images/vision.jpg";
import "./About.css";

function About() {
  useEffect(() => {
    const custom = document.querySelector(".custom");
    const handleCustom = (e) => {
      if (window.innerWidth < 500) {
        custom.style.backgroundSize = 400 - window.pageYOffset / 30 + "%";
        return;
      }
      custom.style.backgroundSize = 200 - window.pageYOffset / 30 + "%";
    };

    window.addEventListener("scroll", handleCustom);
  });

  return (
    <div>
      <div
        id="about"
        className="about"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <h2>About Us</h2>
        <div className="about-inner">
          <p>
            TECHFLARE is a tech startup consisting of passionate software
            developers. We aim to provide highly scalable softwares. We supply
            complete end-to-end solutions for your business to grow
            exponentially. Our mission is to equip your business with the latest
            technological stack for its augmentation.
          </p>
          <img src={aboutimg} alt="about" />
        </div>
        <p>
          We are focused on developing powerful and cutting edge applications,
          that allow us to offer solutions which provide real business benefits.
          We deliver products and services with quantifiable ROI built around
          customer's goals and strategic vision.
        </p>
        <p>
          Our team continuously fulfils our partners' demands by constantly
          updating our knowledge, conquering new areas of expertise, increasing
          the quality of our consultancy and support services. We build long
          lasting relationships with our business partners, easily adapting to
          each one of their requirements.
        </p>
      </div>
      <div className="custom">
        <div className="custom-container">
          <div className="custom-content">
            <p>We build</p>
            <p>Long Lasting relationships</p>
          </div>
        </div>
      </div>
      <div className="vision-mission">
        <div className="vision-mission-inner">
          <img src={vision} alt="vision-mission" />
          <div className="vision-mission-main">
            <div className="mission">
              <h1>OUR MISSION</h1>
              <p>
                "Our mission is to equip your business with the latest
                technological stack for its augmentation."
              </p>
            </div>
            <div className="vision">
              <h1>OUR VISION</h1>
              <p>
                "Our mission is to equip your business with the latest
                technological stack for its augmentation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
