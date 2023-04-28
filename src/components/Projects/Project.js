import React from "react";
import "./Project.scss";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const [repos, setRepos] = useState([]);
  const first = /1$/;
  const second = /2$/;
  const third = /3$/;
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  useEffect(() => {
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
  }, []);

  return (
    <div className="ProjectContainer">
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
                key={repo.id}
                url={repo.homepage}
                name={repo.name}
                des={repo.description}
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
                rank="third"
              />
            );
          }
        })}
      </div>
    </div>
  );
}
