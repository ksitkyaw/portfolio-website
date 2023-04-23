import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="IntroContainer">
      <img className="IntroImage" src="assets/intro.jpg" alt="bg" />
      <div className="textContainer">
        <h2>About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <h2>Technologies I use</h2>
        <div className="listContainer">
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Sass</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
          <ul>
            <li>Nextjs</li>
            <li>Python</li>
            <li>Django</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
