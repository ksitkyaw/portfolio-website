import React, { useState } from "react";
import MyCarousel from "./Carousel";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    id: 0,
    brief: "Hand Tracking plus Generative AI Project - Idea Lab",
    desc: 'I built this application as part of rangoon.tech developer team for recent "Idea on the Cloud" event, uses tensorflow.js hand tracking feature to detect gestures and users can control the application using these gestures. The main functionality is grabbing two topics and using generative AI to create a new valid idea',
    images: [
      "assets/proj1/p1.png",
      "assets/proj1/p2.png",
      "assets/proj1/p3.png",
    ],
    url: "https://ar.rangoon.tech/",
    source: null,
  },
  {
    id: 1,
    brief: "Ecommerce with Booking Management System - Hopper",
    desc: "Enterprise SaaS reservation management system for trampoline park, built by a team of 4, features POS, booking management, scheduling, checkout process and waiver management.",
    images: [
      "assets/proj2/p4.png",
      "assets/proj2/p5.png",
      "assets/proj2/p6.png",
      "assets/proj2/p7.png",
      "assets/proj2/p8.png",
      "assets/proj2/p9.png",
    ],
    url: "https://team-blue-8951b.web.app",
    source: "https://github.com/Scott-Coates-Org/group-project-team-blue",
  },
  {
    id: 2,
    brief: "Interactive Quiz Application",
    desc: "Fun quiz application, using React, Redux and Typescript and also framer motion animation. User can download their score at the end of the game",
    images: [
      "assets/proj3/p10.png",
      "assets/proj3/p11.png",
      "assets/proj3/p12.png",
      "assets/proj3/p13.png",
    ],
    url: "https://interactive-quiz-0101.netlify.app/",
    source: "https://github.com/ksitkyaw/Interactive-Quiz",
  },
  {
    id: 3,
    brief: "Portfolio Page Template",
    desc: "This is a simple portfolio website to showcase your works. It uses React with sass and material UI",
    images: [
      "assets/proj4/p14.png",
      "assets/proj4/p15.png",
      "assets/proj4/p16.png",
      "assets/proj4/p17.png",
      "assets/proj4/p18.png",
    ],
    url: "ksitkyaw.github.io/Portfolio-tuto/",
    source: "https://github.com/ksitkyaw/Portfolio-tuto",
  },
];

export default function MyProjects() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <div
      id="project"
      style={{
        background: "#597575",
      }}
      className="w-screen min-h-screen p-5"
    >
      <h1 className="text-4xl pt-5 ml-5">My Projects</h1>
      <h3 className="text-xl my-4 ml-5">
        Let me show you some of my proud projects.Looks interesting? Check out
        my{" "}
        <a className="text-teal-950" href="https://github.com/ksitkyaw">
          github
        </a>{" "}
        as well
      </h3>
      <div className="flex justify-center items-start ">
        <div className="w-1/2">
          {Data.map((data) => {
            return (
              <Accordion
                key={data.url}
                data={data}
                active={active}
                setActive={setActive}
              />
            );
          })}
          {/* <Accordion />
          <Accordion />
          <Accordion /> */}
        </div>
        <div className="w-2/5 h-3/4 p-3 relative">
          <MyCarousel active={active} data={Data} />
        </div>
      </div>
      <button
        onClick={() => navigate("/projects")}
        class="w-3/4 px-7 py-2 bg-[#015668] hover:bg-[#06648c] rounded-full mx-auto block"
      >
        See All Projects
      </button>
    </div>
  );
}
