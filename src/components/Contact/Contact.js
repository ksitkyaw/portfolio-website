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
  const str =
    "Hey, What do you think about my story or projects? What is the first three word that comes into your mind when looking at my personal website. Just click Say Hello and drop these words and let's be friends. I think It's up to us, creators, to communicate with the work instead of the talk. But there is a limitation to how effectively we can communicate without any feedback. Always welcome your feedback on my works or presentation of my story. Feel free to connect with me on social medias.";
  const shortStr =
    "Hey, What do you think about my story or projects? What is the first three word that comes into your mind when looking at my personal website. Just click Say Hello and drop these words and let's be friends.";
  return (
    <div id="contact" className="contactContainer">
      <div className="upperContainer">
        <h1>Let's Connect</h1>
        <div className="upperLine"></div>
      </div>
      <div className="middleContainer">
        <div className="middleText">
          <p>{window.screen.width > 600 ? str : shortStr}</p>
        </div>

        <ul className="iconList">
          <a
            href="https://www.facebook.com/htutwai.yan.986/"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/khant-si-thu-kyaw/"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            </li>
          </a>
          <a
            href="https://www.discordapp.com/ksitkyaw#7833"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faDiscord} />
            </li>
          </a>
          <a
            href="https://twitter.com/KhantSi2000"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
            </li>
          </a>
          <a
            href="https://www.reddit.com/user/KSTK-26"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="socialIcon" icon={faReddit} />
            </li>
          </a>
        </ul>
      </div>
      <div className="lowerContainer">
        <a href="mailto:ksithukyaw26@gmail.com" className="contactButton">
          Say Hello
        </a>
        <div className="bottomLine"></div>
      </div>
    </div>
  );
}
