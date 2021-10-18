import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import l1 from "../../Assets/Images/l1.jpg";
import l2 from "../../Assets/Images/l2.jpg";
import "./Landing.css";

function Landing() {
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
          </div>
          <img src={l2} alt="landing" />
        </div>
      </div>
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
    </div>
  );
}

export default Landing;
