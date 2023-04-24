import React from "react";
import "./Project.scss";

export default function ProjectCard() {
  return (
    <div className="cardContainer">
      <img className="cardImage" src="logo192.png" alt="project" />
      <div className="cardContent">
        <h4>Project Title</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
}
