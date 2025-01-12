import React from "react";
import Navbar from "./Navbar";
import CodeBlock from "./CodeBlock";
import bg from "../assets/hero.svg";

const PortfolioHero = () => {
  return (
    <div className="min-h-screen bg-[#0c0e1e] text-white flex flex-col" style={{
            backgroundImage: "url(" + bg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-1 px-8 lg:px-16 gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Hello, <br />
            This is <span className="text-[#f9a826]">Angad Yadav</span>, <br />
            I'm a Professional <br />
            <span className="text-[#16f2b3]">Software Developer.</span>
          </h2>
          <div className="flex mt-6 space-x-4">
            <a
              href="#contact"
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md flex items-center space-x-2"
            >
              <span>Contact Me</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1bfZjkhrLxbrcb7opxLWIfe1dECZZWLjE/view?usp=sharing"
              download="AngadYadavResume.pdf"
              className="bg-transparent border border-pink-500 hover:bg-pink-500 text-white py-2 px-4 rounded-md flex items-center space-x-2"
            >
              <span>Get Resume</span>
            </a>
          </div>
          <div className="flex mt-4 space-x-4 text-pink-400">
            <a href="https://github.com/imangadydv" className="hover:text-white">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/imangadydv/" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a> */}
            <a href="https://instagram.com/im_angadydv" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>

        {/* Right Section */}
       <CodeBlock/>
      </div>
    </div>
  );
};

export default PortfolioHero;
