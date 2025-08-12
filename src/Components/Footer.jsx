import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#286281] to-[#1e6f9a] text-gray-400 py-8 px-6 text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} MD Rakib Hasan. All rights reserved.</p>
      <p className="text-sm italic text-cyan-400">
        Crafted with passion by <span className="font-semibold">MD Rakib Hasan</span>
      </p>
    </footer>
  );
};

export default Footer;