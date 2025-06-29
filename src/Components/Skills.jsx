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
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-28 h-28 flex flex-col items-center justify-center text-center gap-2 bg-[#1e293b] rounded-xl shadow-md hover:scale-105 transition"
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
