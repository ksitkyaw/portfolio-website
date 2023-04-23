import React from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="imgContainer">
        <Logo className="navbarLogo" />
      </div>
      <div>
        <ul className="navbarList">
          <li className="navbarListItem">
            <a href="/about">About</a>
          </li>
          <li className="navbarListItem">
            <a href="/about">Project</a>
          </li>
          <li className="navbarListItem">
            <a href="/about">Hobby</a>
          </li>
          <li className="navbarListItem">
            <a href="/about">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbarList">
        <span className="navbarIcon">
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <button className="navbarButton">Get Resume</button>
      </div>
    </nav>
  );
}
