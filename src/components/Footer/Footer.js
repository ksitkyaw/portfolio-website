import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <h3>About Me</h3>
            <p>
              Insert a brief introduction or bio here. You can also include
              links to your social media profiles.
            </p>
          </div> */}
          <div className="col-md-3">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:ksithukyaw26@gmail.com">
                  ksithukyaw26@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:422-126-011">422-126-011</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#project">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; Khant Si Thu Kyaw {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
