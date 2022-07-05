import React, { useState } from "react";
import "./Login.css";
import jwt from "jwt-decode";
import axios from "axios";
import { getApiPath, setToken, setTokenTimeout } from "../../Common";
import Header from "../Header/Header";
import LoginBg from "../project-files/Login-Bg-image.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const loginUrl = getApiPath() + "user/login";
    axios
      .post(loginUrl, loginInfo)
      .then((res) => {
        const userToken = jwt(res.data.user); // decode your token here
        toast.success("Logged in!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          setToken(res.data.user);
          console.log("user", userToken);
          // These function requires token only
          setTokenTimeout(userToken);
          window.location.href = "/";
        }, 2200);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        console.log(err.response.data.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="login-bg">
          <img src={LoginBg} alt="LoginBg" />
        </div>
        <div className="form-wrapper">
          <div className="login-form">
            <h2>Login</h2>
            <form
              action="/"
              onSubmit={(e) => {
                handleSubmitBtn(e);
              }}
            >
              <div className="labelInputWrapper">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  onChange={(event) => onInputChange(event)}
                  name="email"
                  id="email"
                />
              </div>
              <div className="labelInputWrapper">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  onChange={(event) => onInputChange(event)}
                  name="password"
                  id="password"
                />
                <p>
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
              <div className="SubmitBtnWrapper">
                <button>Log In</button>
              </div>
              <div className="box-footer">
                <label htmlFor="|">Not a member?</label>{" "}
                <label htmlFor="|">
                  <Link to="/signup">SignUp</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="login-footer">
          <h3>
            <span> Welcome to</span> DustyPaws
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Login;
