import React from "react";
import cg from "../assets/card.png";
import mypic from "../assets/mypichalf.jpg";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: "url(" + cg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl font-bold text-[#16f2b3] mb-12">About Me</h2>
      <div className="flex flex-col items-center lg:flex-row gap-16 px-8 lg:px-16">
        {/* Profile Image */}
        <div className="w-55 h-55 rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0">
          <img
            src={mypic} // Replace with your actual photo URL
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="text-center lg:text-left max-w-3xl">
          <h3 className="text-2xl font-semibold text-[#16f2b3] mb-4">Who I Am?</h3>
          <p className="text-gray-300 text-lg mb-4">
            Hello! I'm Angad Yadav, a passionate and driven software engineer, currently pursuing my
            Bachelor's degree at Greater Noida Institute of Technology. I specialize in building scalable
            web applications and love solving problems with code. I enjoy exploring new technologies, particularly
            in the fields of web development and data structures. In my free time, I engage in personal projects,
            coding challenges, and contribute to open-source communities.
          </p>
          <p className="text-gray-300 text-lg">
            With a focus on clean code and effective solutions, I aim to bring innovation to the tech world.
            Let's connect and collaborate on exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
