import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0f172a] text-white py-16 px-6 md:px-24 lg:px-38">
      <div className="max-w-5xl mx-auto text-center md:text-left">
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
          I'm <span className="text-cyan-400 font-bold">Rakib Hasan</span>, a
          self-taught and deeply passionate{" "}
          <span className="text-cyan-300 font-medium">
            Full Stack Developer
          </span>{" "}
          on a mission to craft impactful digital experiences. My journey began
          with curiosity and a laptop, but transformed into something bigger
          when I found my way to{" "}
          <span className="text-cyan-300 font-medium">Programming Hero</span>.
          Since then, I've been building full-stack applications that don't just
          work — they feel good to use.
          <br />
          <br />
          What drives me is more than just writing code. It's about creating
          solutions that solve real problems, building beautiful and intuitive
          interfaces, and making the web a better place one line at a time.
          <br />
          <br />
          I'm not just learning to get hired — I'm learning to make a
          difference. My dream is to grow into a developer who can lead teams,
          build products that matter, and never stop pushing the limits of
          what's possible on the web.
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
