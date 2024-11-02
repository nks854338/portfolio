import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
// import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Service from "./Service";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <hr/>
      <About />
      <hr/>
      <Skills />
      <hr/>
      <Education />
      <hr/>
      <Service/>
      {/* <Experience /> */}
      <hr/>
      <Projects />
      <hr/>
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
