import React from "react";
import { motion } from "framer-motion";
import image from "../assets/My-photo.jpg"
import Typewriter from 'typewriter-effect';
import cv from "/stack developer resume.pdf"
import banner from "../assets/banner.jpg"
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {

  return (
    <section
      id="home"
      className="py-15 lg:py-0 lg:min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-5 lg:gap-0 px-10 md:px-20 lg:px-40 relative"
    >


      {/* Left: Bio */}
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left w-full"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-black">
          Hi, I'm Rakib Hasan
        </h1>
        <div className="font-extrabold text-5xl text-cyan-400">
          {/* Junior Full Stack Developer */}
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "React Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 75
            }}
          />
           <a
            href={cv}
            download="Rakib Hasan full stack developer resume.pdf"
            className="btn btn-warning mx-auto text-center btn-xl mt-4 hover:scale-105 transition-transform"
          >
            Download CV
          </a>
          <div className="flex gap-4 justify-center md:justify-start text-2xl my-5 text-center">
            <a href="https://www.facebook.com/md.rakib.hasan.0001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-120 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/dev-mdrakib/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-120 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Rakib-Hasan1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-120 transition-colors">
              <FaGithub />
            </a>
          </div>
         
        </div>

      </motion.div>

      {/* Right: Image/banner */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src={image}
          alt="Rakib Hasan"
          className="w-64 h-64 md:w-72 md:h-72 object-cover object-top rounded-full shadow-[0_0_25px_#06b6d4]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
