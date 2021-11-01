import React from "react";
import career from "../../Assets/Images/careers.svg";
import { Helmet } from "react-helmet";
import "./Careers.css";

function Careers() {
  return (
    <section className="careers" id="careers">
      <Helmet>
        <title>TechFlare Careers</title>
        <meta name="description" content="Best Software Developers in Pune" />
        <meta name="description" content="Best Web Developers in Pune" />
        <meta name="description" content="Best App Developers in Pune" />
        <meta name="description" content="Best Web Designers in Pune" />
        <meta name="description" content="Best Blockchain Developers in Pune" />
        <meta name="description" content="Best Hosting Services in Pune" />
        <meta
          name="description"
          content="Best Social Media Marketing Services in Pune"
        />
        <meta
          name="keywords"
          content="Techflare Careers, The Techflare, Web Developers, Web Designers, Blockchain Developers, Hosting, App Developers"
        />
      </Helmet>
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
