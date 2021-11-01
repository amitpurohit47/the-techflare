import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import MobileNav from "./Components/MobileNav/MobileNav";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Landing from "./Components/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import "aos/dist/aos.css"
import AOS from 'aos';
import "./App.css";
import Careers from "./Components/Careers/Careers";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init();
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });

  const [active, setActive] = useState("home");


  return (
    <BrowserRouter>
      <article className="App">
        <Header active={active} setActive={setActive} />
        <Helmet>
          <title>The TechFlare</title>
          <meta name="description" content="Best Software Developers in Pune" />
        </Helmet>
        <MobileNav />
        <Switch>
          <Route path="/" exact component={() => <Landing setActive={setActive} />} />
          <Route path="/about" exact component={() => <About setActive={setActive} /> } />
          <Route path="/services" exact component={() => <Services setActive={setActive} />} />
          <Route path="/careers" exact component={() => <Careers setActive={setActive} />} />
          <Route path="/blog" exact component={() => <Blog setActive={setActive} />} />
          <Route path="/contact" exact component={() => <Contact setActive={setActive} />} />
        </Switch>
        <Footer setActive={setActive} />
      </article>
    </BrowserRouter>
    );
}

export default App;
