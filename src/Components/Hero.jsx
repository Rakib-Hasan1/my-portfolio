import React from "react";
import { motion } from "framer-motion";
import image from "../assets/My-photo.jpg"
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between md:gap-8 px-6 md:px-20 lg:px-40 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative"
    >

      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      {/* Your Content/Components */}


      {/* Left: Bio */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-cyan-400">Rakib Hasan</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          A passionate Junior <span className="text-cyan-300 font-semibold">Full Stack Developer</span> crafting clean, high-performance web experiences with a love for beautiful UI and scalable backend logic.
        </p>

      </motion.div>

      {/* Right: Image */}
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
