import React from "react";

function MeetOurTeams() {
  return (
    <>
      <div className="border-2 mx-2 p-4">
        <div className="flex items-center">
          <img
            src="https://placehold.co/100"
            className="rounded-full"
            alt="Team 1"
          />
          <div className="ml-2">
            <p className="text-xl text-left">Headline</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, hic
          consectetur! Qui expedita eum ex, magnam debitis aspernatur nemo
          recusandae?
        </p>
        <br />
        <div className="socials">
          <a href="" className="pr-4">
            <i className="fa-brands fa-facebook text-red-500 hover:text-red-700 text-xl"></i>
          </a>
          <a href="" className="pr-4">
            <i className="fa-brands fa-linkedin text-red-500 hover:text-red-700 text-xl"></i>
          </a>
          <a href="" className="pr-4">
            <i className="fa-brands fa-twitter text-red-500 hover:text-red-700 text-xl"></i>
          </a>

          <a href="" className="pr-4">
            <i className="fa-brands fa-instagram text-red-500 hover:text-red-700 text-xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="px-40 py-10">
      <h1 className="text-2xl text-center bg-orange-800 text-white py-1">
        About Us
      </h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo
        asperiores velit officiis a et tenetur quis hic rem earum sapiente nisi
        quisquam ad magni, non quos totam! Aspernatur beatae aut ipsa assumenda
        dolores tempora cum est minus vel sint.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est minus sunt
        recusandae quos! Laboriosam ratione magni necessitatibus dolore fugit!
        Labore!
      </p>
      <br />
      <h2 className="text-2xl text-center bg-orange-800 text-white py-1">
        Meet Our Teams
      </h2>
      <br />
      <div className="flex">
        <MeetOurTeams/>
        <MeetOurTeams/>
        <MeetOurTeams/>
      </div>
    </div>
  );
}

export default About;
