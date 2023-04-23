import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="headContainer">
      <img className="headImage" src="assets/headerBg.png" alt="bg" />
      <div className="textContainer">
        <h1>Khant Si Thu Kyaw</h1>
        <h4>Front-end Web Developer</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
    </div>
  );
}
