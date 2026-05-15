import React, { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Project from "./pages/Project";
import Activities from "./pages/Activities";
import Footer from "./pages/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "career", "project", "activities"];


    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        console.log(`[observer] ${entry.target.id}:`, entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,  // 기존 0.3에서 0.1로 수정
      rootMargin: "0px 0px -20% 0px", // 여백도 좀 줄여봄
    });

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      console.log(`🔍 감지 대상 섹션: ${sectionId}`, section);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-16">
      <Navigation activeSection={activeSection} isHomeVisible={activeSection === "home"} />


      <div id="home" className="min-h-screen">
        <Home />
      </div>
      <div id="career" className="h-auto">
        <Career />
      </div>
      <div id="project" className="flex justify-center min-h-screen">
        <Project />
      </div>
      <div id="activities" className="min-h-screen">
        <Activities />
      </div>

      <Footer />
    </div>
  );
}

export default App;
