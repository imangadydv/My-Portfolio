import React from "react";
import cg from "../assets/card.png";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0c0e1e] fixed top-0 left-0 w-full z-50 shadow-md" style={{
                backgroundImage: "url(" + cg + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} >
      <h1 className="text-[#16f2b3] text-2xl font-bold cursor-pointer">Angad Yadav</h1>
      <ul className="flex space-x-6 text-gray-300 text-sm uppercase">
        <li>
          <a
            href="#about"
            className="hover:text-[#16f2b3] cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-[#16f2b3] cursor-pointer"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-[#16f2b3] cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="hover:text-[#16f2b3] cursor-pointer"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-[#16f2b3] cursor-pointer"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
