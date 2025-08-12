import React from "react";
import { useParams, Link } from "react-router";
import project1 from "../assets/snap-fix-assignment-11.web.app_.png";
import project2 from "../assets/trackforce-d041e.web.app_.png";
import project3 from "../assets/zap-shift-ee5f9.web.app_.png";
import { FaArrowLeft } from "react-icons/fa";

const projects = [
    {
        id: "SnapFix",
        name: "SnapFix",
        image: project1,
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
        description:
            "SnapFix is a user-friendly platform designed to connect local service seekers with trusted service providers quickly and efficiently. Whether you need a plumber, electrician, cleaner, or any other professional service, SnapFix simplifies your search by offering a curated list of verified providers in your area",
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
        liveLink: "https://trackforce-d041e.web.app/",
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
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Firebase Authentication",
        ],
        description:
            "ProFast is a parcel delivery platform designed to connect senders with reliable couriers. It features real-time order tracking, dynamic pricing, and a smooth booking process, ensuring parcels reach their destinations promptly and securely.",
        liveLink: "https://zap-shift-ee5f9.web.app/",
        githubClient: "https://github.com/Rakib-Hasan1/pro-shift-client",
        challenges:
            "Ensuring real-time tracking and handling multiple courier assignments simultaneously required complex backend logic.",
        futurePlans:
            "Implement in-app payments and develop a dedicated mobile application to enhance user experience.",
    },
];

const ProjectDetails = () => {
    const { id } = useParams();

    // Find project by id param (case-sensitive)
    const project = projects.find((p) => p.id === id);

    if (!project)
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#092839] text-white p-6">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <Link
                    to="/"
                    className="text-cyan-400 underline hover:text-cyan-600"
                >
                    Back to Home
                </Link>
            </div>
        );

    return (
        <section className="bg-gradient-to-b from-[#092839] to-[#1b2c45]">
            <div className="min-h-screen text-white py-16 px-6 md:px-24 max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-6">{project.name}</h1>
                    <Link to={"/"} className="text-cyan-400 hover:text-cyan-600 flex items-center gap-2">
                        <FaArrowLeft />
                        <button className="hover:underline cursor-pointer">Back to home</button>
                    </Link>
                </div>

                <div className="mb-8 rounded-lg border border-gray-700 max-h-[400px] overflow-y-auto shadow-lg">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full object-contain"
                    />
                </div>

                <p className="mb-6 text-gray-300">{project.description}</p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-cyan-300 mb-2">Tech Stack</h2>
                    <ul className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <li
                                key={tech}
                                className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                        Challenges Faced
                    </h2>
                    <p className="text-gray-300">{project.challenges}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                        Future Improvements
                    </h2>
                    <p className="text-gray-300">{project.futurePlans}</p>
                </div>

                <div className="flex gap-6 mt-8">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded font-semibold transition"
                    >
                        Live Project
                    </a>
                    <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-800 px-5 py-3 rounded font-semibold transition"
                    >
                        GitHub Repo (Client)
                    </a>
                </div>


            </div>
        </section>
    );
};

export default ProjectDetails;
