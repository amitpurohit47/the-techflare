import React from "react";
import logo from "../../Assets/Images/mainlogo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-main">
        <div className="footer-contact">
          <img src={logo} alt="logo" />
          <p>219, The Business Hub, Pune</p>
          <a href="https://wa.me/?phone=918983569006">P: +91 8983569006</a>
          <a href="mailto:info@thetechflare.com">
            M: info@customtechflare.co.in
          </a>
        </div>
        <div className="footer-services">
          <h1>IT Services</h1>
          <p>Website Development</p>
          <p>App Development</p>
          <p>Blockchain</p>
          <p>IoT</p>
          <p>Digital Marketing</p>
          <p>Cloud</p>
          <p>JS Services</p>
          <p>More...</p>
        </div>
        <div className="footer-company">
          <h1>Company</h1>
          <p>About</p>
          <p>Mission and Vision</p>
          <p>Values</p>
          <p>Leadership Team</p>
          <p>Careers</p>
          <p>Support</p>
        </div>
        <div className="footer-other">
          <h1>Contact Us</h1>
          <p>Case Studies</p>
          <p>IT Blog</p>
          <p>Cookies Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2021-2022 THE TECHFLARE PVT. LTD.
      </p>
    </div>
  );
}

export default Footer;
