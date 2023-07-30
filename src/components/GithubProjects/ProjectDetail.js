import React from "react";
import "./ProjectDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function ProjectDetail({ html_url, url, name, description }) {
  return (
    <div className="detailContainer">
      <h2>{name}</h2>
      <a href={url ? url : ""}>
        {url ? url : "URL Not available at the moment"}
      </a>
      <p>{description}</p>
      <a href={html_url} target="_blank" rel="noreferrer">
        <span className="giticon">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </span>
      </a>
    </div>
  );
}
