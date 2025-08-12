import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  {
    icon: (
      <SiNextdotjs className="text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
    ),
    name: "Next.js",
  },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
  { icon: <FaNode className="text-green-500" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiJsonwebtokens className="text-red-400" />, name: "JWT" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
  { icon: <SiNetlify className="text-cyan-300" />, name: "Netlify" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
];

// Skill bars data
const skillBars = [
  { name: "HTML", level: 94, color: "#f97316" },
  { name: "CSS", level: 91, color: "#06b6d4" },
  { name: "JavaScript", level: 77, color: "#facc15" },
  { name: "React", level: 81, color: "#38bdf8" },
  { name: "Next.js", level: 73, color: "#ffffff" },
  { name: "MongoDB", level: 68, color: "#10b981" },
  { name: "Express.js", level: 74, color: "#15c981" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#092839] to-[#1b2c45] text-white py-10 px-6 md:px-16"
    >
      <div className="px-6 md:px-24 lg:px-30">
        {/* Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 text-center"
        >
          My Skills
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto"
        >
          Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </motion.p>

         {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-11"
        >
          {skillBars.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-3 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}, 0 0 25px ${skill.color}`
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 my-6 lg:my-10 text-center"
        >
          Technologies and Tools
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-28 h-28 flex flex-col items-center justify-center text-center gap-3 bg-[#1e293b] rounded-xl shadow-md hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
