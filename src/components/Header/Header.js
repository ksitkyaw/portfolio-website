import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div id="home" className="headContainer">
      <video autoPlay loop muted playsInline className="video">
        <source src="assets/bgVideo.mp4" type="video/mp4" />{" "}
        {/* Update with the path to your video file */}
        Your browser does not support the video tag.
      </video>
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
        <h1>Khant Si Thu Kyaw</h1>
        <h4>Front-end Web Developer</h4>
        <p>
          Self-Taught Programmer and Web Development Specialist - Innovative
          team-player with strong problem-solving skills - Delivering optimal
          results every time
        </p>
      </motion.div>
    </div>
  );
}
