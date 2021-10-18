import React from "react";
import logo from "../../Assets/Images/techflare2.jpeg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <h2>Contact Us</h2>
      <p>
        Feel free to connect with us through our WhatsApp number
        <a href="https://wa.me/?phone=918983569006" target="_blank" rel="noreferrer">
          +91 8983569006
        </a>
      </p>
      <p>
        For any queries we are just a mail away at
        <a href="mailto:info@thetechflare.com">info@thetechflare.com</a>
      </p>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logo-inner">
          <p>THE</p>
          <p>
            <span>TECH</span>FLARE
          </p>
        </div>
      </div>
      <p className="copyright">&copy; THE TECHFLARE PVT. LTD. 2021</p>
    </div>
  );
}

export default Footer;
