import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GithubPage() {
  const githubData = useLoaderData();
  return (
    <>
      <div className="px-40 py-10">
        <h2 className="bg-slate-800 text-white text-2xl text-center py-1">
          Github
        </h2>
        <br />
        <div className="flex items-center">
          <img src={githubData.avatar_url} alt="" className="w-20" />
          <div className="ml-4">
            <p className="font-bold text-xl">{githubData.login}</p>
            <p className="font-bold text-xl">{githubData.name}</p>
            <p>{githubData.bio}</p>
          </div>
        </div>
        <br />
        <div className="">
          <p>
            <b>Followers : </b> {githubData.followers}{" "}
          </p>
          <p>
            <b>Following : </b> {githubData.following}{" "}
          </p>
          <p>
            <b>Address : </b> {githubData.location}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default GithubPage;

export const loaderGihubData = async () => {
  const myGithubUsername = "anand-jaiswal-IN";
  // const data = await  fetch(`https://api.github.com/users/${myGithubUsername}`);
  const data = await fetch(`https://api.github.com/users/anand-jaiswal-IN`);
  const githubData = await data.json()
  return githubData;
};
