import React from "react";
import {Link} from "react-router-dom";
function Home() {
  return (
    <>
      <div className="px-40 py-10 flex">
        <div className="mr-4">
        <h1 className="text-3xl">Hello Visitors.</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          facere ducimus ipsum architecto neque reiciendis vel consequuntur
          harum incidunt nihil laudantium dolore cum officia veritatis, maiores
          blanditiis sequi soluta officiis quaerat accusamus? Dignissimos
          placeat iste debitis! Nisi voluptatum ipsum amet consectetur vero, eos
          labore tenetur culpa. Necessitatibus eos porro quis!
        </p>
        
        <br />
        <Link to="/about" className="bg-red-500 text-white hover:bg-red-800 px-4 py-2 rounded-md">About</Link>
        </div>
        <div>
        <img src="/img/explore-vector.png " alt="Art Work" className=""/>
        </div>
      </div>
    </>
  );
}

export default Home;
