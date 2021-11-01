import React from "react";
import logo from "../../Assets/Images/mainlogo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({setActive}) {

  const scrolltotop = (name) => {
    setActive(name);
    window.scrollTo(0,0);
  }

  return (
    <section className="footer" id="footer">
      <div className="footer-main">
        <div className="footer-contact">
          <img src={logo} alt="logo" />
          <p>219, The Business Hub, Pune</p>
          <a href="https://wa.me/?phone=918983569006">P: +91 8983569006</a>
          <a href="mailto:info@thetechflare.com">
            M: info@techflare.co.in
          </a>
        </div>
        <div className="footer-services">
          <h1>IT Services</h1>
          <Link onClick={() => scrolltotop("services")}to="/services">Website Development</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">App Development</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">Blockchain</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">IoT</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">Digital Marketing</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">Cloud</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">JS Services</Link>
          <Link onClick={() => scrolltotop("services")}to="/services">More...</Link>
        </div>
        <div className="footer-company">
          <h1>Company</h1>
          <Link onClick={() => scrolltotop("about")}to="/about">About</Link>
          <Link onClick={() => scrolltotop("about")}to="/about">Mission and Vision</Link>
          <Link onClick={() => scrolltotop("about")}to="/about">Values</Link>
          <Link onClick={() => scrolltotop("about")}to="/about">Leadership Team</Link>
          <Link onClick={() => scrolltotop("about")}to="/about">Careers</Link>
          <Link onClick={() => scrolltotop("about")}to="/about">Support</Link>
        </div>
        <div className="footer-other">
          <h1>Contact Us</h1>
          <Link onClick={() => scrolltotop("contact")}to="/contact">Case Studies</Link>
          <Link onClick={() => scrolltotop("contact")}to="/contact">IT Blog</Link>
          <Link onClick={() => scrolltotop("contact")}to="/contact">Cookies Policy</Link>
          <Link onClick={() => scrolltotop("contact")}to="/contact">Privacy Policy</Link>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2021-2022 THE TECHFLARE PVT. LTD.
      </p>
    </section>
  );
}

export default Footer;
