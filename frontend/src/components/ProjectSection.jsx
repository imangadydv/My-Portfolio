import React from "react";


const ProjectsSection = () => {
  const projects = [
    {
      title: "Tech-Oriented Social Media Platform",
      description:
        "A social media platform for connecting users based on technical hobbies and interests, featuring live collaboration tools, group chats, and a reward system.",
      link: "https://github.com/your-username/tech-social-platform",
    },
    {
      title: "Job Portal",
      description:
        "A platform connecting employers and job seekers with advanced filtering and real-time chat functionalities.",
      link: "https://github.com/your-username/job-portal",
    },
    {
      title: "DSA 100-Day Challenge",
      description:
        "A personal project to solve 100 data structures and algorithms problems, improving problem-solving and coding skills.",
      link: "https://github.com/your-username/dsa-100-days",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold text-[#16f2b3] mb-12">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#0f0b34] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-[#16f2b3] underline hover:text-white"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <img
          src="https://via.placeholder.com/400x400.png?text=Projects+Illustration"
          alt="Projects Illustration"
          className="w-96"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
