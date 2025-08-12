import React from "react";
import Navbar from "../Components/Navbar";
import Navbarr from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#1c4e6b] to-[#08548f]">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Home;
