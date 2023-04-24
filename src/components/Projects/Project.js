import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="ProjectContainer">
      <h1>My Projects</h1>
      <div className="ProjectOverlay"></div>
      <img className="ProjectImage" src="assets/projBg.jpg" alt="bg" />
      <div className="cardWrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
