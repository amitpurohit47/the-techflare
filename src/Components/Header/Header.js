import React, { useEffect, useState } from "react";
import whatsapp from "../../Assets/Images/whatsapp.png";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/mainlogo.png";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const arr = window.location.href.split("/");
    if (arr[3] !== "") {
      setActive(arr[3]);
    }
  }, [active]);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    const span = document.querySelector('.hamburger').querySelectorAll('span');
    const mobilemenu = document.querySelector('.mobile-menu');
    if (mobilemenu.classList.contains('menu-active')) {
      mobilemenu.classList.remove('menu-active');
      span[0].classList.remove("span1");
      span[1].classList.remove("span2");
      span[2].classList.remove("span3");
    } else {
      mobilemenu.classList.add('menu-active');
      span[0].classList.add("span1");
      span[1].classList.add("span2");
      span[2].classList.add("span3");
    }
  };

  return (
    <nav className="nav-bar">
      <div className="hamburger" onClick={toggleMobileMenu}>
        <label for="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <Link to="/">
          <div
            className="nav-item"
            onClick={() => {
              setActive("home");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </div>
          <span className={active === "home" ? "span-active" : ""}></span>
        </Link>
        <Link to="/about">
          <div
            className="nav-item"
            onClick={() => {
              setActive("about");
              window.scrollTo(0, 0);
            }}
          >
            About
          </div>
          <span className={active === "about" ? "span-active" : ""}></span>
        </Link>
        <Link to="/services">
          <div
            className="nav-item"
            onClick={() => {
              setActive("services");
              window.scrollTo(0, 0);
            }}
          >
            Services
          </div>
          <span className={active === "services" ? "span-active" : ""}></span>
        </Link>
        <Link
          to="/careers"
          onClick={() => {
            setActive("careers");
            window.scrollTo(0, 0);
          }}
        >
          <div className="nav-item">Careers</div>
          <span className={active === "careers" ? "span-active" : ""}></span>
        </Link>
        <Link
          to="/blog"
          onClick={() => {
            setActive("blog");
            window.scrollTo(0, 0);
          }}
        >
          <div className="nav-item">Blogs</div>
          <span className={active === "blog" ? "span-active" : ""}></span>
        </Link>

        <a href="#footer">
          <div className="nav-item">Contact</div>
          <span></span>
        </a>
      </div>
      <div className="nav-contact">
        <img src={whatsapp} alt="whatsapp logo" />
        <div className="nav-contact-inner">
          <p>Have any queries?</p>
          <a
            href="https://wa.me/?phone=918983569006"
            target="_blank"
            rel="noreferrer"
          >
            +91 8983569006
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
