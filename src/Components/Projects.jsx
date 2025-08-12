import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import project1 from "../assets/snap-fix-assignment-11.web.app_.png"
import project2 from "../assets/trackforce-d041e.web.app_.png"
import project3 from "../assets/zap-shift-ee5f9.web.app_.png"


const Projects = () => {

  const projects = [
    {
      id: "SnapFix",
      name: "SnapFix",
      image: project1,
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
      description: "SnapFix is a user-friendly platform designed to connect local service seekers with trusted service providers quickly and efficiently. Whether you need a plumber, electrician, cleaner, or any other professional service, SnapFix simplifies your search by offering a curated list of verified providers in your area",
      liveLink: "https://snap-fix-assignment-11.web.app/",
      githubClient: "https://github.com/Rakib-Hasan1/SnapFix-client",
      challenges: "Integrating real-time search was challenging...",
      futurePlans: "Add social media sharing and mobile app support.",
    },
    {
      id: "TrackForce",
      name: "TrackForce",
      image: project2,
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      description:
        "TrackForce is a comprehensive Employee Management Web Application that streamlines HR workflows, including employee verification, payroll management, and role-based access. It enables HR teams to efficiently manage employee data, verify credentials, and handle salary payments within a secure and user-friendly interface.",
      liveLink: "https://trackforce.web.app/",
      githubClient: "https://github.com/Rakib-Hasan1/TrackForce-client",
      challenges:
        "Implementing role-based authentication and dynamic dashboards for different user roles presented complex state management challenges.",
      futurePlans:
        "Integrate advanced reporting features and enhance the mobile responsiveness for better accessibility.",
    },
    {
      id: "ProFast",
      name: "ProFast",
      image: project3,
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase Authentication"],
      description:
        "ProFast is a parcel delivery platform designed to connect senders with reliable couriers. It features real-time order tracking, dynamic pricing, and a smooth booking process, ensuring parcels reach their destinations promptly and securely.",
      liveLink: "https://profact-parcel-delivery.web.app/",
      githubClient: "https://github.com/Rakib-Hasan1/ProFast-client",
      challenges:
        "Ensuring real-time tracking and handling multiple courier assignments simultaneously required complex backend logic.",
      futurePlans:
        "Implement in-app payments and develop a dedicated mobile application to enhance user experience.",
    },
  ];

  const cardVariants = {
    offscreen: { y: 80, opacity: 0 }, // start 80px below, fully transparent
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1.2, // slow 1.2 seconds duration
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(6,182,212,0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className='bg-gradient-to-b from-[#1b2c45] to-[#214559]'>
      <div id="projects" className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="bg-[#1e293b] rounded-xl overflow-hidden flex flex-col"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-4">{project.name}</h3>
                <Link
                  to={`/${project.id}`}
                  className="mt-auto inline-block px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-600 text-white text-center transition-colors"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Projects;
