import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Navbar() {
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: "to fap",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <nav className="navbar">
      <div className="imgContainer">
        <img src="assets/logo.jpg" alt="Logo" className="navbarLogo" />
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
        <button onClick={addTodo} className="navbarButton">
          Get Resume
        </button>
      </div>
    </nav>
  );
}
