import React from "react";
import sec from "../assets/top-bg.svg";
import edu from "../assets/edulogo.png";

const EducationSection = () => {
  const educationData = [
    {
      year: "2021 - 2025",
      title: "BACHELORS",
      institution: "Greater Noida Institute of Technology, Greater Noida",
    },
    {
      year: "2019 - 2020",
      title: "HIGHER SECONDARY CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
    {
      year: "2017 - 2018",
      title: "SECONDARY SCHOOL CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col justify-center py-16"
    //   style={{
    //     backgroundImage: "url(" + sec + ")",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    >
        <h2 className="text-3xl font-bold text-[#16f2b3] text-center mb-12">
            Educations
          </h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16">
        {/* Left side: Education list */}
        
        <div className="lg:w-2/3">
          {/* Centered heading */}
         
          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex items-center bg-[#0f0b34] p-6 rounded-lg shadow-md border-2 border-transparent hover:border-[#16f2b3] transition-all duration-300 max-w-lg mx-auto"
              >
                <div className="text-purple-400 text-4xl mr-6">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div>
                  <p className="text-[#16f2b3] text-lg font-semibold">{edu.year}</p>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Education image */}
        <div className="lg:w-1/3 mt-12 lg:mt-0">
          <img
            src={edu}
            alt="Education Illustration"
            className="w-96 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
