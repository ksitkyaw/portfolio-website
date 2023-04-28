import React from "react";
import "./ProjectDetail.scss";

export default function ProjectDetail({ url, name, description }) {
  return (
    <div className="detailContainer">
      <h2>{name}</h2>
      <a href={url}>{url}</a>
      <p>{description}</p>
    </div>
  );
}
