import React from "react";
import bg from "../assets/hero.svg";
const SkillsSection = () => {
  const skills = [
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Data Structures & Algorithms",
    "SQL",
  ];

  return (
    <div id="skills" style={{
                backgroundImage: "url(" + bg + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}  className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold text-[#16f2b3] mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8 lg:px-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#0f0b34] p-6 rounded-lg shadow-md"
          >
            <p className="text-[#16f2b3] text-lg font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
