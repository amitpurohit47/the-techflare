import React, { useState } from "react";
import { Helmet } from "react-helmet";
// import web from "../../Assets/Images/web.png";
// import hosting from "../../Assets/Images/hosting.png";
// import softwareEngineering from "../../Assets/Images/software-engineering.png";
// import social from "../../Assets/Images/social.png";
// import mobile from "../../Assets/Images/mobile.png";
// import webDesign from "../../Assets/Images/web-design.png";
// import websiteapp from "../../Assets/Images/websiteapp.png";
// import saas from "../../Assets/Images/saas.png";
// import industry from "../../Assets/Images/industry.png";

import Techs from "../Techs/Techs";
import "./Services.css";

function Services() {
  const serviceInfo = [
    {
      name: "Create Websites",
      info: "Website development services from the techflare give a highly secure and customizable online presence. We create responsive experiences that engage your audience and give your brand more reach. At each point of the development lifecycle, we do end-to-end testing of web applications and deliver what we promised. Getting a website that conveys your business is vital for marketing and to keep up with the massive market. It can have one page or it could be complex enough to connect you with millions of people worldwide. If your site isn't ready, don't wait! Get in touch with a skilled web developer who will make sure your internet needs are met fast and professionally.",
      bullets: [],
    },
    {
      name: "Hosting",
      info: "Worried about how to host your web application? Our team would help you to set up your web application up in running. At Hosting TechFlare, we know that things happen and people make mistakes. Hence, our 24/7 customer support is always available to help you with the most complex of situations Call or email us today for anything hosting related and see how good our services      really are",
      bullets: [],
    },
    {
      name: "Software Engineering & Consulting",
      info: "Software Engineering and Consulting is a team of skilled developers and consultants who provide expansive software development services. We have the ability to offer all of your necessary programming needs from design, implementation, testing, deployment, and on-going support. Get in touch with our team today so we can get started!",
      bullets: [],
    },
    {
      name: "Digital Marketing",
      info: "In the era of digitalization where everyone is surfing over internet wouldn't it be great if we advertise the products online ? Digital Marketing is used to promote your brand and products online. And helps you to connect to your customers over internet. We at The TechFlare will help you to increase your reach and take your brand to the next level. Through our strategies you can reach to your potent customers. Services offered",
      bullets: ["Social Media Marketing (Facebook , Twitter, Instagram)", "SEO", "Content marketing", "Email marketing", ],
    },
    {
      name: "Mobile Applications",
      info: "We're optimistic developers - it's what drives us to take on new challenges. We are always looking for new ways to integrate the latest trends, technologies, and standards with our projects, ensuring you are using the best practices in your project. Our UX/UI design team helps turn your idea into a real solution by thinking through every step of process flow iteratively alongside identifying any potential problems that may arise before they happen. Do you have an idea but don't know where to start? Let our expert team identify how best to take your project from copy-pasting boilerplate code or figuring out Rails views all over again. Don’t hesitate! The one time cost will be worth it when you see everything working together seamlessly. Services Provided",
      bullets: ["Android App", "iOS App", "Flutter App", "App Screen Designing"],
    },
    {
      name: "UI/UX Design",
      info: "Have a great idea for a product, or have one brewing? Have no problem with the planning and design process, but need someone to put together an amazing UI/UX strategy plan? Look no further. Trust a team of talented professionals to help you build your idea without any hassle. With      Intellectsoft’s years of industry experience in UX and UI Design, we know that the key ingredients for success are collaboration from day one and building what works best for those who will use it every day. We offer robust service packages depending on your requirements—from research through design layout to UI coding all the way until launch—and can provide them at an affordable cost never-before offered by designers within other companies. Give us a call",
      bullets: [],
    },
    {
      name: "Web Applications",
      info: "We at TechFlare are passionate about web applications. We build engaging, powerful web solutions that will blow your mind. Every website needs a skilled developer on its team and at TechFlare, we've got the best in the industry working for you. From static text to complex social networks or e-commerce platforms, at TechFlare it's always new ideas that drive our process of constant innovation and experimentation so each project is fresh inspiration for all involved with the development process - whether an experienced designer or a novice programmer. A fantastic world passionate about unleashing worthwhile potential through their experiences",
      bullets: [],
    },
  ];

  const items = serviceInfo.map((service) => (
    <div className="services-right">
      <h1>{service.name}</h1>
      <p>{service.info}</p>
      <div className="service-bullets">
        {service.bullets.map((bullet, i) => (
          <p key={`bullet${i}`}>{bullet}</p>
        ))}
      </div>
    </div>
  ));

  const [currService, setCurrService] = useState(serviceInfo[0]);

  return (
    <section className="services" id="services">
      <Helmet>
        <title>TechFlare Services</title>
        <meta name="description" content="Best Software Developers in Pune" />
        <meta name="description" content="Best Web Developers in Pune" />
        <meta name="description" content="Best App Developers in Pune" />
        <meta name="description" content="Best Web Designers in Pune" />
        <meta name="description" content="Best Blockchain Developers in Pune" />
        <meta name="description" content="Best Hosting Services in Pune" />
        <meta
          name="description"
          content="Best Social Media Marketing Services in Pune"
        />
        <meta
          name="keywords"
          content="TechFlare Services, The Techflare, Web Developers, Web Designers, Blockchain Developers, Hosting, App Developers"
        />
      </Helmet>
      <h2 data-aos="fade-up" data-aos-duration="2000">
        Services
      </h2>
      <div className="services-main">
        <div className="services-left">
          {serviceInfo.map((service, i) => (
            <p
              onClick={() => setCurrService(serviceInfo[i])}
              className={
                currService.name === service.name ? "service-active" : ""
              }
              key={`servicelist${i}`}
            >
              {service.name}
            </p>
          ))}
        </div>
        <div className="services-right">
          <h1>{currService.name}</h1>
          <p>{currService.info}</p>
          <div className="service-bullets">
            {currService.bullets.map((bullet, i) => (
              <p key={`bullet${i}`}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="services-carousel">{items}</div>
      {/* <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={web} alt="do" />
            <p>Create Websites</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={hosting} alt="do" />
            <p>Hosting</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={softwareEngineering} alt="do" />
            <p>Software Engineering & Consulting</p>
          </div>
        </div>
      </div>
      <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={social} alt="do" />
            <p>Social Media Marketing</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
          <img src={mobile} alt="do" />
            <p>Mobile Applications</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={webDesign} alt="do" />
            <p>Design</p>
          </div>
        </div>
      </div>
      <div className="services-row">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={websiteapp} alt="do" />
            <p>Web Applications</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={saas} alt="do" />
            <p>SaaS</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="service-header">
            <img src={industry} alt="do" />
            <p>Industry 4.0 Solutions</p>
          </div>
        </div>
      </div> */}
      <Techs />
    </section>
  );
}

export default Services;
