import React from 'react';
import "../pages/Home.css"
import bottle from "../images/bottle.png"

function Home() {
  return (


    <div className="position-relative">
      <img src={bottle} alt="" className="img-fluid" />
      <div className='home'>
        <h1>Home</h1>
      </div>
    </div>

  );
}

export default Home;
