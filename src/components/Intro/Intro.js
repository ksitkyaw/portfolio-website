import React from "react";
import "./Intro.scss";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div id="about" className="IntroContainer ">
      <img className="IntroImage" src="assets/intro.jpg" alt="bg" />
      <div className="overlay"></div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="textContainer"
      >
        <h2>About Me</h2>
        <p>
          I'm a self-taught programmer with a background in mining engineering,
          specializing in cutting-edge web development with a focus on high
          performance, security, and accessibility. With an inventive mindset
          and problem-solving skills acquired from my engineering studies, I
          enjoy pushing the boundaries of what's possible. My deep expertise in
          front-end technologies and frameworks, combined with my strong
          teamwork skills, make me the ideal puzzle piece for any developer
          team.
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
      </motion.div>
    </motion.div>
  );
}
