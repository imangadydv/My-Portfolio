
import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FoodKalash",
      description:
        "A full-stack food delivery website with menu browsing, order placement, and donation features, ensuring a seamless user experience.",
      link: "https://github.com/imangadydv/FoodKalash",
    },
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
        "A real-time messaging app supporting group and private chats with media sharing.",
      link: "https://github.com/imangadydv/chitchat",
    },
    {
      title: "Bus Booking",
      description:
        "A web app for booking and managing bus tickets with seat selection and admin controls.",
      link: "https://github.com/imangadydv/Bus-Booking",
    },
    {
      title: "ToDo(Redux)",
      description:
        "A Redux-powered task manager allowing users to add, update, and track tasks efficiently.",
      link: "https://github.com/imangadydv/todoredux",
    },
    {
      title: "E-Commerce",
      description:
        "A feature-rich e-commerce platform offering seamless buying and selling experiences.",
      link: "https://github.com/imangadydv/e-commerce",
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 180, damping: 10 }}
            className="relative group bg-[#0f0b34] p-6 rounded-xl shadow-lg overflow-hidden
             border border-transparent hover:border-[#16f2b3] hover:shadow-[#16f2b3]/30"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-500 bg-gradient-to-r from-[#16f2b3] to-transparent blur-xl"></div>

            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block underline text-[#16f2b3] hover:text-white transition-all"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;

