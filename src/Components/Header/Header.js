import React, {useEffect, useState} from "react";
import whatsapp from "../../Assets/Images/whatsapp.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  const [active,setActive] = useState("home");

  useEffect(() => {

    const arr = window.location.href.split("/");
    if(arr[3]!==''){
      setActive(arr[3]);
    }
    
    // const toggleMobileMenu = (e) => {
    //   e.preventDefault();
    //   if (mobileMenuOpen) {
    //     span[0].classList.remove("span1");
    //     span[1].classList.remove("span2");
    //     span[2].classList.remove("span3");
    //   } else {
    //     span[0].classList.add("span1");
    //     span[1].classList.add("span2");
    //     span[2].classList.add("span3");
    //   }
    //   mobileMenuOpen = !mobileMenuOpen;
    // };
    // ham.addEventListener("click", toggleMobileMenu);

  },[active]);

  return (
    <nav className="nav-bar">
      <div className="hamburger">
        <label for="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="logo">
        <div className="logo-inner">
          <p>THE</p>
          <p>
            <span>TECH</span>FLARE
          </p>
        </div>
      </div>
      <div className="nav-items">
        <Link to="/">
          <div className="nav-item" onClick={()=>setActive("home")}>Home</div>
          <span className={active==="home" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/about">
          <div className="nav-item" onClick={()=>setActive("about")}>About</div>
          <span className={active==="about" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/services">
          <div className="nav-item" onClick={()=>setActive("services")}>Services</div>
          <span className={active==="services" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/technologies" onClick={()=>setActive("techs")}>
          <div className="nav-item">Technologies</div>
          <span className={active==="techs" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/careers" onClick={()=>setActive("careers")}>
          <div className="nav-item">Careers</div>
          <span className={active==="careers" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/blog" onClick={()=>setActive("blog")}>
          <div className="nav-item">Blog</div>
          <span className={active==="blog" ? 'span-active' : ''}></span>
        </Link>
        <Link to="/clients" onClick={()=>setActive("clients")}>
          <div className="nav-item">Clients</div>
          <span className={active==="clients" ? 'span-active' : ''}></span>
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
          <a href="https://wa.me/?phone=918983569006" target="_blank" rel="noreferrer">+91 8983569006</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
