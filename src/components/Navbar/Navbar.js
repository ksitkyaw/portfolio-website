import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "../../stories/Button";
import useDownloader from "react-use-downloader";

export default function Navbar() {
  // const { download } = useDownloader();
  // const addTodo = (e) => {
  //   e.preventDefault();
  //   download(
  //     "https://drive.google.com/file/d/1VbFlJCpQWYyveJpTLrO6-QPc0bJVNQy1/view?usp=drive_link",
  //     "resume.pdf"
  //   );
  // };

  return (
    <nav className="navbar">
      <div className="imgContainer">
        <img src="assets/logo.jpg" alt="Logo" className="navbarLogo" />
      </div>
      <div>
        <ul className="navbarList disappear">
          <li className="navbarListItem">
            <a href="#about">About</a>
          </li>
          <li className="navbarListItem">
            <a href="#project">Project</a>
          </li>
          {/* <li className="navbarListItem">
            <a href="#hobby">Hobby</a>
          </li> */}
          <li className="navbarListItem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbarList">
        <a target="_blank" href="https://github.com/ksitkyaw" rel="noreferrer">
          <span className="navbarIcon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>

        <a href="mailto:ksithukyaw26@gmail.com" className="navbarButton">
          Get in Touch
        </a>
        {/* <Button label="Get the fucking Resume" /> */}
      </div>
    </nav>
  );
}
