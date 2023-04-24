import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="upperContainer">
        <h1>Let's Connect</h1>
        <div className="upperLine"></div>
      </div>
      <div className="middleContainer">
        <div className="middleText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
        </div>

        <ul className="iconList">
          <li className="socialIcon">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="socialIcon">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="socialIcon">
            <FontAwesomeIcon icon={faDiscord} />
          </li>
          <li className="socialIcon">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li className="socialIcon">
            <FontAwesomeIcon icon={faReddit} />
          </li>
        </ul>
      </div>
      <div className="lowerContainer">
        <button className="contactButton">Say Hello</button>
        <div className="bottomLine"></div>
      </div>
    </div>
  );
}
