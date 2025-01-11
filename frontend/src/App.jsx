import React from "react";
import PortfolioHero from "./components/PortfolioHero";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <div className="app-container">
      <PortfolioHero />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactMe />
      <Footer />  
    </div>
  );
};

export default App;