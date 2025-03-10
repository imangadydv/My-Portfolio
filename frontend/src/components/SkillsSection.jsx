import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiRedux, SiExpress, SiMongodb, SiPostman, SiCplusplus } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import bg from "../assets/hero.svg";

const SkillsSection = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Data Structures & Algorithms", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Material-UI", icon: <MdOutlineDesignServices /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "C", icon: <FaJava /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="skills"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
    >
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center bg-[#0f0b34] p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 group overflow-hidden"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-pink-500 before:to-transparent before:w-0 group-hover:before:w-full before:h-full before:transition-all before:duration-500"></div>
            <div className="text-4xl text-[#16f2b3] mb-4 z-10">{skill.icon}</div>
            <p className="text-[#16f2b3] text-lg font-semibold z-10">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
