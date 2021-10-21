import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  const closeNav = () => {
    window.scrollTo(0,0);
    document.querySelector(".mobile-menu").classList.remove("menu-active");
    const span = document.querySelector(".hamburger").querySelectorAll("span");
    span[0].classList.remove("span1");
    span[1].classList.remove("span2");
    span[2].classList.remove("span3");
  };
  return (
    <div className="mobile-menu">
      <Link to="/">
        <div className="nav-item" data-name="home" onClick={closeNav}>
          Home
        </div>
        <span></span>
      </Link>
      <Link to="/about">
        <div className="nav-item" data-name="about" onClick={closeNav}>
          About
        </div>
      </Link>
      <Link to="/services">
        <div className="nav-item" data-name="services" onClick={closeNav}>
          Services
        </div>
      </Link>
      <Link to="/careers">
        <div className="nav-item" data-name="clients" onClick={closeNav}>
          Careers
        </div>
      </Link>
      <Link to="/blog">
        <div className="nav-item" data-name="clients" onClick={closeNav}>
          Blogs
        </div>
      </Link>
      <Link to="/contact">
        <div className="nav-item" data-name="footer" onClick={closeNav}>
          Contact
        </div>
      </Link>
    </div>
  );
}

export default MobileNav;
