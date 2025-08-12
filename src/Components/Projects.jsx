import React, { useState } from "react";
import { motion } from "framer-motion";
import job_portal_img from "../assets/Screenshot 2025-06-29 135638.png";
import FlagshipFaceOff from "../assets/Screenshot 2025-06-29 1358745.png";
import dragon_news from "../assets/dragon news.png";
import snapfix from '../assets/snapfix.png';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);
  const cards = [
    {
      title: "SnapFix",
      image: snapfix,
      desc: "SnapFix is a full-stack web application that connects users with verified home service professionals for quick and reliable repair or maintenance tasks. The platform offers seamless service booking, real-time status updates, user authentication, and role-based dashboards for both users and providers.",
      tags: ["React", "React-Router", "Context API", "MongoDB", "Node.js", "Express.js", "JWT", "Tailwind"],
      live: "https://snap-fix-assignment-11.web.app",
      code: "https://github.com/Rakib-Hasan1/SnapFix-client",
    },
    {
      title: "ProFast",
      image: "",
      desc: "",
      tags: ["React", "React-Router", "Context API", "MongoDB", "Node.js", "Express.js", "JWT", "Tailwind", "Stripe"],
      live: "",
      code: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:scale-[1.03] transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-44 object-cover"
              />
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {card.title}
              </h3>

              <div className="mb-3">
                <p
                  className={`text-gray-400 text-sm ${isExpanded ? "" : "line-clamp-2"
                    }`}
                >
                  {card.desc}
                </p>

                {card.desc.split(" ").length > 15 && (
                  <button
                    onClick={toggleDescription}
                    className="text-blue-500 text-sm focus:outline-none cursor-pointer hover:underline"
                  >
                    {isExpanded ? "See less" : "Read more"}
                  </button>
                )}
              </div>


              {/* <p className="text-gray-400 text-sm mb-4">{card.desc}</p> */}
              <div className="flex flex-wrap gap-2 mb-4">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-600 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={card.live}
                  className="text-cyan-400 hover:underline"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={card.code}
                  className="text-cyan-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
