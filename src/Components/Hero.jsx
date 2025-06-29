import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/193305775.jpg"; // Replace with your image

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      {/* Left: Bio */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-cyan-400">Rakib Hasan</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          A passionate <span className="text-cyan-300 font-semibold">MERN Stack Developer</span> crafting clean, high-performance web experiences with a love for beautiful UI and scalable backend logic.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all shadow-lg"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src={profileImg}
          alt="Rakib Hasan"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-[0_0_25px_#06b6d4]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
