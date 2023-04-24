import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function HobbyCard({ text = "Hard" }) {
  return (
    <div className={`hobbyCardContainer ${text}`}>
      <div className="wrapper">
        <div className="cardTitle">
          <h2>{text}</h2>
        </div>
        <div className="cardContent">
          <p>Solved: 20</p>
          <p>Unsolved: 20</p>
        </div>
      </div>
      <div className="buttonWrapper">
        <button className="hobbyButton">
          <FontAwesomeIcon icon={faCirclePlay} />
        </button>
      </div>
    </div>
  );
}
