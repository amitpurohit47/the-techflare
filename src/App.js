import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import MobileNav from "./Components/MobileNav/MobileNav";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Landing from "./Components/Landing/Landing";
import "aos/dist/aos.css"
import AOS from 'aos';
import "./App.css";
import Careers from "./Components/Careers/Careers";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
        <MobileNav />
        <Switch>
          <Route path="/" exact component={() => <Landing setActive={setActive} />} />
          <Route path="/about" exact component={() => <About setActive={setActive} /> } />
          <Route path="/services" exact component={Services} />
          <Route path="/careers" exact component={Careers} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
        <Footer />
      </article>
    </BrowserRouter>
    );
}

export default App;
