import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import l1 from "../../Assets/Images/l1.jpg";
import l2 from "../../Assets/Images/l2.jpg";
import l3 from "../../Assets/Images/l3.jpg";
import meeting from "../../Assets/Images/meeting.jpg";
import quote from "../../Assets/Images/quote.svg";
import { Link } from "react-router-dom";
import landingabout from "../../Assets/Images/landingabout.jpg";
import Techs from "../Techs/Techs";
import "./Landing.css";
import Clients from "../Clients/Clients";

function Landing({ setActive }) {
  const items = [
    <div className="carousel-item">
      <div className="landing-content1">
        <div className="landing-content1-inner">
          <div className="landing-content1-main">
            <h1>THE TECHFLARE</h1>
            <p>Our Solutions is what makes us unique</p>
            <button>Contact Us</button>
          </div>
          <img src={l1} alt="landing" />
        </div>
      </div>
    </div>,
    <div className="carousel-item">
      <div className="landing-content2">
        <div className="landing-content2-inner">
          <div className="landing-content2-main">
            <h1>Your Personal </h1>
            <h1>Technology Partner</h1>
            <button>Contact Us</button>
          </div>
          <img src={l2} alt="landing" />
        </div>
      </div>
    </div>,
    <div className="carousel-item">
      <div className="landing-content3">
        <div className="landing-content3-inner">
          <div className="landing-content3-main">
            <h1>Leveraging Tech to Drive</h1>
            <h1>A better IT Experience</h1>
            <button>Contact Us</button>
          </div>
          <img src={l3} alt="landing" />
        </div>
      </div>
    </div>,
  ];

  const items2 = [
    <div className="testimonial1 testimonial">
      <h1>What Our Clients Say</h1>
      <img src={quote} alt="quote" />
      <p className="testimonial-main">
        I have known and worked closely with Rick and Liza Looser, and the fine
        folks at The Agency, for almost two decades and feel fully confident in
        expressing my endorsement. There is not a finer, more dedicated group of
        people offering marketing communications and public affairs capabilities
        and services. I first met Rick and Liza when I managed earned and paid
        media relations for Litton Industries, now Northrop Grumman Corporation.
      </p>
      <h2>Bob Robers</h2>
      <h4>Sales Manager</h4>
    </div>,
    <div className="testimonial2 testimonial">
      <h1>What Our Clients Say</h1>
      <img src={quote} alt="quote" />
      <p className="testimonial-main">
        I have known and worked closely with Rick and Liza Looser, and the fine
        folks at The Agency, for almost two decades and feel fully confident in
        expressing my endorsement. There is not a finer, more dedicated group of
        people offering marketing communications and public affairs capabilities
        and services. I first met Rick and Liza when I managed earned and paid
        media relations for Litton Industries, now Northrop Grumman Corporation.
      </p>
      <h2>Bob Robers</h2>
      <h4>Sales Manager</h4>
    </div>,
    <div className="testimonial3 testimonial">
      <h1>What Our Clients Say</h1>
      <img src={quote} alt="quote" />
      <p className="testimonial-main">
        I have known and worked closely with Rick and Liza Looser, and the fine
        folks at The Agency, for almost two decades and feel fully confident in
        expressing my endorsement. There is not a finer, more dedicated group of
        people offering marketing communications and public affairs capabilities
        and services. I first met Rick and Liza when I managed earned and paid
        media relations for Litton Industries, now Northrop Grumman Corporation.
      </p>
      <h2>Bob Robers</h2>
      <h4>Sales Manager</h4>
    </div>,
  ];

  return (
    <div className="landing-page" id="home">
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
      />
      <div className="landing-about">
        <div className="landing-about-inner">
          <div className="landing-about-main">
            <h1>Why Trust TechFlare ?</h1>
            <p>
              We are focused on developing powerful and cutting edge
              applications, that allow us to offer solutions which provide real
              business benefits. We deliver products and services with
              quantifiable ROI built around customer's goals and strategic
              vision.
            </p>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
                setActive("about");
              }}
            >
              Read More
            </Link>
          </div>
          <img
            className="landing-about-img"
            src={landingabout}
            alt="landing-about"
          />
        </div>
        <div className="landing-cards">
          <div className="landing-card">
            <img src={meeting} alt="meeting" />
            <Link
              to="/services"
              onClick={() => {
                window.scrollTo(0, 0);
                setActive("services");
              }}
            >
              Our Services
            </Link>
          </div>
          <div className="landing-card">
            <img src={meeting} alt="meeting" />
            <a href="#techs">Technolgies</a>
          </div>
          <div className="landing-card">
            <img src={meeting} alt="meeting" />
            <Link
              to="/careers"
              onClick={() => {
                window.scrollTo(0, 0);
                setActive("careers");
              }}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
      <Techs />
      <AliceCarousel
        items={items2}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={1000}
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
      />
      <Clients />
    </div>
  );
}

export default Landing;
