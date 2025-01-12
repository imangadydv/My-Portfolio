import React from "react";


const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "An e-commerce platform with advanced features, allowing users to buy and sell products online with a seamless shopping experience.",
      link: "https://github.com/imangadydv/e-commerce",
    },
    {
      title: "Job Portal",
      description:
        "A job portal designed to connect employers with job seekers, offering features like job listings, application tracking, and real-time chat.",
      link: "https://github.com/imangadydv/Jobportal",
      // live: "https://jobportal-nvs6.onrender.com/",
    },
    {
      title: "ChitChat",
      description:
        "A real-time messaging app that allows users to communicate with each other seamlessly, featuring group chats, private messaging, and media sharing.",
      link: "https://github.com/imangadydv/chitchat",
    },
  ];
  

  return (
    <div id="projects" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold text-[#16f2b3] mb-12">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#0f0b34] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:rotate-1"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
