import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FoodKalash",
      description:
        "A full-stack food delivery website with menu browsing, order placement, and donation features, ensuring a seamless user experience.",
      link: "https://github.com/imangadydv/FoodKalash",
    }
    ,
    {
      title: "Neural AI",
      description:
        "A ChatGPT-inspired AI chatbot application built using the MERN stack, offering real-time conversational interactions with a smart, user-friendly interface.",
      link: "https://github.com/imangadydv/neuralAi",
    },
    {
      title: "Job Portal",
      description:
        "A job portal designed to connect employers with job seekers, offering features like job listings, application tracking, and real-time chat.",
      link: "https://github.com/imangadydv/Jobportal",
    },
    {
      title: "ChitChat",
      description:
        "A real-time messaging app that allows users to communicate with each other seamlessly, featuring group chats, private messaging, and media sharing.",
      link: "https://github.com/imangadydv/chitchat",
    },
    {
      title: "Bus Booking",
      description:
        "A web-based application that enables users to search, book, and manage bus tickets with ease, featuring seat selection, booking history, and admin controls.",
      link: "https://github.com/imangadydv/Bus-Booking",
    },
    
    {
      title: "ToDo(Redux)",
      description:
        "A task management app developed with Redux for efficient state handling, allowing users to add, delete, and update their to-do tasks seamlessly.",
      link: "https://github.com/imangadydv/todoredux",
    },
    
    {
      title: "E-Commerce",
      description:
        "An e-commerce platform with advanced features, allowing users to buy and sell products online with a seamless shopping experience.",
      link: "https://github.com/imangadydv/e-commerce",
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col bg-[#0f0b34] p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#14124a]"
          >
            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4">{project.description}</p>
            <div className="flex">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-[#16f2b3] underline hover:text-white"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
