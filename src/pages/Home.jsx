import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <img className="home-logo" src="/images/SIG_BIG.png" />
      <NavLink className="home-btn" to={`/advisors`}>
        ENTER
      </NavLink>
    </div>
  );
};

export default Home;
