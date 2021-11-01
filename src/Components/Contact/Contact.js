import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { Helmet } from "react-helmet";

toast.configure();
function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = document.getElementById("name").value;
      const organization = document.getElementById("organization").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const companysize = document.getElementById("company").value;
      const inquiry = document.getElementById("inquiry").value;
      const message = document.getElementById("message").value;
      const data = {
        name,
        organization,
        email,
        phone,
        companysize,
        inquiry,
        message,
      };
      toast.info("We're processing your request", { autoClose: 1500 });
      const res = await axios.post(
        "https://techflare-backend.herokuapp.com/",
        data
      );
      if (res.data.status === "success") {
        toast.success("We've received your message!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <section className="contact-us" id="contact-us">
      <Helmet>
        <title>Contact Us</title>
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
          content="Techflare Contact, The Techflare, Web Developers, Web Designers, Blockchain Developers, Hosting, App Developers"
        />
      </Helmet>
      <h2 data-aos="fade-up" data-aos-duration="2000">
        Contact Us
      </h2>
      <h3>
        We are a team of experienced IT specialists, ready to solve your issues.
        Let`s talk
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="e.g. John Doe"
              id="name"
            />
          </div>
          <div className="form-field">
            <label>Organization *</label>
            <input
              type="text"
              name="organization"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="Company name"
              id="organization"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              aria-required="true"
              required
              aria-invalid="true"
              placeholder="name@company.com"
              id="email"
            />
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <input
              type="text"
              name="name"
              aria-invalid="true"
              placeholder="Full Number(incl. prefix)"
              id="phone"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Company Size *</label>
            <select
              aria-invalid="false"
              aria-required="true"
              required
              id="company"
            >
              <option value="Please Select">Please Select</option>
              <option value="1 (Freelancer)">1 (Freelancer)</option>
              <option value="2-19">2-19</option>
              <option value="20-49">20-49</option>
              <option value="50+">50+</option>
            </select>
          </div>
          <div className="form-field">
            <label>What is your inquiry about? *</label>
            <select
              aria-required="true"
              required
              aria-invalid="false"
              id="inquiry"
            >
              <option value="Please Select">Please Select</option>
              <option value="General Information Request">
                General Information Request
              </option>
              <option value="Partner Relations">Partner Relations</option>
              <option value="Careers">Careers</option>
              <option value="Software Licencing">Software Licencing</option>
            </select>
          </div>
        </div>
        <div className="form-message">
          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Let us know what you need"
            id="message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
