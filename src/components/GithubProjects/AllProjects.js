import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import ProjectDetail from "./ProjectDetail";

export default function AllProjects() {
  const [repos, setRepos] = useState([]);
  //   const regex = /\*$/;
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
    <div className="bg-[#015668]">
      <h1 className="title text-slate-700">All Projects</h1>
      <div className="gridContainer">
        {repos.map((repo) => {
          return (
            <ProjectDetail
              key={repo.id}
              url={repo.homepage}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          );
        })}
      </div>
    </div>
  );
}
