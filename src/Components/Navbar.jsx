import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-cyan-400">
          Rakib.dev
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              className="capitalize cursor-pointer hover:text-cyan-400 transition-all relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/Resume.pdf"
            download
            className="btn btn-warning mx-auto text-center"
          >
            Download CV
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-center text-lg capitalize text-cyan-300"
            >
              {link}
            </Link>
          ))}
          <Link
            to="/your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-block mx-auto text-center"
          >
            Download CV
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
