import React from "react";
import angular from "../../Assets/Images/angular.png";
import reactjs from "../../Assets/Images/reactjs-icon.svg";
import python from "../../Assets/Images/python.png";
import js from "../../Assets/Images/js.png";
import netlify from "../../Assets/Images/netlify.png";
import doimg from "../../Assets/Images/do.png";
import ts from "../../Assets/Images/ts.png";
import node from "../../Assets/Images/node.png";
import github from "../../Assets/Images/github.png";
import mongo from "../../Assets/Images/mongo.png";
import postman from "../../Assets/Images/postman.png";
import gitlab from "../../Assets/Images/gitlab.png";
import sass from "../../Assets/Images/sass.png";
import tailwind from "../../Assets/Images/tailwind.png";
import ubuntu from "../../Assets/Images/ubuntu.png";
import vue from "../../Assets/Images/vue.png";
import capacitor from "../../Assets/Images/capacitor.png";
import express from "../../Assets/Images/express.png";
import "./Techs.css";

function Techs() {
  return (
    <div className="techs" id="techs">
      <h2 data-aos-duration="2000" data-aos="fade-up">
        What we use
      </h2>
      <div className="techs-row" data-aos="fade-up" data-aos-delay="100">
        <div className="tech">
          <img src={angular} alt="img" />
          <img src={reactjs} alt="img" />
          <img src={python} alt="img" />
        </div>
        <div className="tech">
          <img src={js} alt="img" />
          <img src={netlify} alt="img" />
          <img src={doimg} alt="img" />
        </div>
        <div className="tech">
          <img src={ts} alt="img" />
          <img src={node} alt="img" />
          <img src={github} alt="img" />
        </div>
      </div>
      <div className="techs-row" data-aos="fade-up" data-aos-delay="200">
        <div className="tech">
          <img src={mongo} alt="img" />
          <img src={postman} alt="img" />
          <img src={gitlab} alt="img" />
        </div>
        <div className="tech">
          <img src={sass} alt="img" />
          <img src={tailwind} alt="img" id="tailwind" />
          <img src={ubuntu} alt="img" />
        </div>
        <div className="tech">
          <img src={vue} alt="img" />
          <img src={capacitor} alt="img" />
          <img src={express} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Techs;
