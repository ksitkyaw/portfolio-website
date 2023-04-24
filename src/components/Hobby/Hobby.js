import React from "react";
import "./Hobby.scss";
import HobbyCard from "./HobbyCard";

export default function Hobby() {
  return (
    <>
      <div className="hobbyContainer">
        <h1>My Hobby</h1>
        <div className="hobbyText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
      <div className="hobbyCardWrapper">
        <HobbyCard text="Easy" />
        <HobbyCard text="Medium" />
        <HobbyCard />
      </div>
    </>
  );
}
