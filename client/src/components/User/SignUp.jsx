import axios from "axios";
import React, { useState } from "react";
import { getApiPath, isValidEmail, setToken } from "../../Common";
import "./SignUp.css";
import Header from "../Header/Header";
import LoginBg from "../project-files/Login-Bg-image.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import leftCorner from "../project-files/left_corner_login.svg";
import rightCorner from "../project-files/right_corner_login.svg";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isNgo: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const HandleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "isNgo") {
      value = e.target.checked;
      setUser({ ...user, [name]: value });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!isValidEmail(user.email)) {
      toast.error("Email not Valid", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    const SignUPURL = getApiPath() + "user/signup";
    console.log(user);
    axios
      .post(SignUPURL, user)
      .then((res) => {
        toast.success("Signed Up!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          setToken(res.data.user);
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

  const HandleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up user">
      <Header />
      <div className="sign-up-body">
        <div className="sign-up-image-section">
          <img src={leftCorner} alt="leftCorner" className="leftCornerBg" />
          <img src={rightCorner} alt="rightCorner" className="rightCornerBg" />
          <img src={LoginBg} alt="LoginBg" className="sign-bg-img" />
        </div>
        <div className="signup-form-wrapper">
          <h2>Sign Up</h2>{" "}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="labelInputWrapper">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                id="username"
                autoComplete="off"
                required
                onChange={(event) => HandleInputChange(event)}
                placeholder="User name"
              />
            </div>
            <div className="labelInputWrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                id="email"
                autoComplete="off"
                required
                placeholder="Email"
                onChange={(event) => HandleInputChange(event)}
              />
            </div>

            <div className="labelInputWrapper">
              <label htmlFor="password">Password</label>
              <div className="inputPasswordIconWrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  placeholder="Password"
                  onChange={(event) => HandleInputChange(event)}
                />
                <FontAwesomeIcon
                  onMouseDown={(e) => {
                    HandleShowPassword(e);
                  }}
                  onMouseUp={(e) => {
                    HandleShowPassword(e);
                  }}
                  className="passwordIcon"
                  icon={faEyeSlash}
                />
              </div>
            </div>
            <div className="SubmitBtnWrapper">
              <button>Sign Up</button>
            </div>
            <p>
              Are you an NGO user?
              <Link to="/NGO/signup"> Sign Up here</Link>
            </p>
            <p>
              Already a user?
              <Link to="/login"> Login Here</Link>
            </p>
          </form>
        </div>
        <div className="signup-footer">
          <h3>
            <span> Welcome to</span> DustyPaws
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
