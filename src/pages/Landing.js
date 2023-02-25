import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Process from "../components/Process";
import Services from "../components/Services";

const Landing = () => {
  return (
    <>
      <main>
        <Home />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
