import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#092839] text-white py-10 px-6 md:px-24 lg:px-38"
    >
      <div className="text-center md:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed mb-10"
        >
          I’m <span className="text-cyan-400 font-bold">Rakib Hasan</span>, a
          self-taught and deeply passionate{" "}
          <span className="text-cyan-300 font-medium">
            Full Stack Developer
          </span>{" "}
          driven by curiosity, creativity, and the thrill of building something
          from scratch. My programming journey began with nothing more than a
          laptop and the desire to understand how websites work. That spark
          quickly grew into a commitment to mastering modern technologies, and
          finding my way to{" "}
          <span className="text-cyan-300 font-medium">Programming Hero</span>{" "}
          turned my learning into a full-fledged development journey.
          <br />
          <br />
          I thrive on creating clean, functional, and visually appealing
          applications — whether it’s crafting intuitive UIs, building robust
          backends, or ensuring everything runs smoothly from front to back.
          Solving real-world problems and watching an idea come to life on the
          screen is what fuels my passion for coding.
          <br />
          <br />
          Outside of programming, I’m an active and curious person. I enjoy
          exploring new technologies, but I also take time to recharge — whether
          it’s playing football with friends, going for walks to clear my head,
          or diving into photography to capture unique perspectives. I believe
          creativity off the screen helps me become a better problem-solver on
          it.
          <br />
          <br />
          My goal is not just to be a developer, but to be someone who builds
          products that truly make an impact, collaborates with great teams, and
          never stops learning.
        </motion.p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🛠 Tech Stack",
              content:
                "React, Node.js, MongoDB, Express.js, Tailwind CSS, DaisyUI",
            },
            {
              title: "🚀 Projects Built",
              content:
                "Event Explorer, Auction Gallery, ZapShift — real-world apps with authentication, dashboards, and performance focus.",
            },
            {
              title: "🎯 Goal",
              content:
                "To become a top-tier Full Stack Developer and build scalable products that improve lives and solve real-world problems.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
