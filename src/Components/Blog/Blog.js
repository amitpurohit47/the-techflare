import React from "react";
import { Helmet } from "react-helmet";
import "./Blog.css";

function Blog() {
  return (
    <section className="blog">
      <Helmet>
        <title>TechFlare Blogs</title>
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
          content="TechFlare Blogs, The Techflare, Web Developers, Web Designers, Blockchain Developers, Hosting, App Developers"
        />
      </Helmet>
      <h2 data-aos="fade-up" data-aos-duration="2000">Blogs</h2>
      <div className="blog-main" data-aos="fade-up">
        <h2>Stay Tuned!! Coming Soon...</h2>
      </div>
    </section>
  );
}

export default Blog;
