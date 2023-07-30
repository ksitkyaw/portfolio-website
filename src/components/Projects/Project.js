import React from "react";
import "./Project.scss";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
// import { Client } from "get-pinned-repos";

export default function Project() {
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();
  const first = /1$/;
  const second = /2$/;
  const third = /3$/;
  const firstPlace = {
    rank: "first",
    url: "https://team-blue-8951b.web.app/",
    name: "Hopper",
    html_url: "https://github.com/Scott-Coates-Org/group-project-team-blue",
    desc: "Enterprise SaaS reservation management system for trampoline park, built by a team of 4, features POS, booking management, scheduling, checkout process and waiver management.",
  };
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  // Client.setToken(process.env.GITHUB_TOKEN);

  useEffect(() => {
    async function fetchGitHub() {
      octokit
        .request("GET /users/ksitkyaw/repos", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then((response) => {
          console.log(response.data);
          setRepos(response.data);
        })
        .catch((error) => console.error(error));

      // await Client.setToken(process.env.GITHUB_TOKEN);
      // const pinned = await Client.getPinnedRepos("ksitkyaw");

      // console.log(pinned);
    }
    fetchGitHub();
  }, []);

  return (
    <div id="project" className="ProjectContainer">
      <h1>My Projects</h1>
      <div className="ProjectOverlay"></div>
      <img className="ProjectImage" src="assets/projBg.jpg" alt="bg" />
      <div className="cardWrapper">
        {/* <ProjectCard rank="second" />
        <ProjectCard rank="first" />
        <ProjectCard rank="third" /> */}
        {repos.map((repo) => {
          if (first.test(repo.description)) {
            return (
              <ProjectCard
                key={firstPlace.rank}
                url={firstPlace.url}
                name={firstPlace.name}
                des={firstPlace.desc}
                html_url={firstPlace.html_url}
                rank="first"
              />
            );
          } else if (second.test(repo.description)) {
            return (
              <ProjectCard
                key={repo.id}
                url={repo.homepage}
                name={repo.name}
                des={repo.description}
                html_url={repo.html_url}
                rank="second"
              />
            );
          } else if (third.test(repo.description)) {
            return (
              <ProjectCard
                key={repo.id}
                url={repo.homepage}
                name={repo.name}
                des={repo.description}
                html_url={repo.html_url}
                rank="third"
              />
            );
          }
        })}
      </div>
      <button onClick={() => navigate("/projects")} class="projectButton">
        See All Projects
      </button>
    </div>
  );
}
