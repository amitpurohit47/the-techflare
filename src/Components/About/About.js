import React from "react";
import aboutimg from "../../Assets/Images/about1.jpg";
import vision from "../../Assets/Images/vision.jpg";
import { Helmet } from "react-helmet";
import "./About.css";

function About() {

  return (
    <div>
      <section
        id="about"
        className="about"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <h2>About Us</h2>
        <Helmet>
          <title>About TechFlare</title>
          <meta name="description" content="Best Software Developers in Pune" />
          <meta name="description" content="Best Web Developers in Pune" />
          <meta name="description" content="Best App Developers in Pune" />
          <meta name="description" content="Best Web Designers in Pune" />
          <meta
            name="description"
            content="Best Blockchain Developers in Pune"
          />
          <meta name="description" content="Best Hosting Services in Pune" />
          <meta
            name="description"
            content="Best Social Media Marketing Services in Pune"
          />
          <meta
            name="keywords"
            content="Techflare About , The Techflare, Web Developers, Web Designers, Blockchain Developers, Hosting, App Developers"
          />
        </Helmet>
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
      </section>
      <section className="vision-mission">
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
      </section>
    </div>
  );
}

export default About;
