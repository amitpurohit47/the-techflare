import React from "react";

function MobileNav() {
  console.log("nav");
  return (
    <div className="mobile-menu">
      <a href="#home" data-aos="fade-left">
        <div className="nav-item" data-name="home">
          Home
        </div>
        <span></span>
      </a>
      <a href="#about" data-aos="fade-left">
        <div className="nav-item" data-name="about">
          About
        </div>
      </a>
      <a href="#services" data-aos="fade-left">
        <div className="nav-item" data-name="services">
          Services
        </div>
      </a>
      <a href="#clients" data-aos="fade-left">
        <div className="nav-item" data-name="clients">
          Clients
        </div>
      </a>
      <a href="#footer" data-aos="fade-left">
        <div className="nav-item" data-name="footer">
          Contact
        </div>
      </a>
    </div>
  );
}

export default MobileNav;
