import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./login.css"

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const data = JSON.parse(localStorage.getItem("users") || "[]");
  const valid = data.find((e) => e.name === name);

  const formCheck = (e) => {
    e.preventDefault();
    if (valid.password === pwd) {
      navigate("/dashboard")
      localStorage.setItem("currentUser",valid.name)
    } else {
      setError(true);
    }
  };
  return (
    <div className="login-form">
      <form className="container py-4" onSubmit={formCheck}>
        <h1 className="text-center text-info">Login Form</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
      {error && <p className="text-danger text-center" >Enter valid username and password</p>}
     
    </div>
  );
};

export default Login;