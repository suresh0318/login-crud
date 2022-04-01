import React from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Register />
      <div className="line">
          
      </div>
      <Login />
    </div>
  );
};

export default Home;
