import React from "react";
import ivoomi from "../../Assets/Images/ivoomi.png";
import nphsat from "../../Assets/Images/nphsat.jpeg";
import entropica from "../../Assets/Images/entropica.jpeg";
import kreditzy from "../../Assets/Images/kreditzy.jpeg";
import fairmoney from "../../Assets/Images/fairmoney.jpeg";
import moneyview from "../../Assets/Images/moneyview.jpeg";
import "./Clients.css";

function Clients() {
  return (
    <div className="clients" id="clients">
      <h2 data-aos-duration="2000" data-aos="fade-up">
        Our Clients
      </h2>
      <div className="clients-track">
        <img
          src={ivoomi}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{width : '100px'}}
        />
        <img
          src={nphsat}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={entropica}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={kreditzy}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={fairmoney}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={moneyview}
          alt="client"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
}

export default Clients;
