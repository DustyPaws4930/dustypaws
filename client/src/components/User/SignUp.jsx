import axios from "axios";
import React, { useState } from "react";
import jwt from "jwt-decode";
import { getApiPath, setToken, setTokenTimeout } from "../../Common";
import "./SignUp.css"
import Header from "../Header/Header";
import LoginBg from "../project-files/Login-Bg-image.png";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isNgo: false,
  });
  const [cPassword, setConfirmPassword] = useState("");
  const [securityKey, setSecurityKey] = useState("");

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

    const SignUPURL = getApiPath() + "user/signup";
    console.log(user);
    axios
      .post(SignUPURL, user)
      .then((res) => {
        const userToken = jwt(res.data.user); // decode your token here
        alert("Signed Up!!");
        setToken(res.data.user);
        window.location.href = "/";
        // These function requires token only
        // setTokenTimeout(userToken);
        // console.log(isTokenTimeOut(userToken));
        // console.log("user", new Date(userToken.iat));
      })
      .catch((err) => {
        console.log("Error" + err.response.data);
        alert("Error: " + err.response.data);
      });
  };

  const GetLiveLocation = (event) => {
    event.preventDefault();
  };

  const HandleSecurityCheck = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <Header />
      <div className="sign-up-body">
        <div className="sign-up-image-section">
          <img src={LoginBg} alt="LoginBg" />
        </div>
        <div className="signup-form-wrapper">
          <h2>Sign Up</h2>{" "}
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <div className="labelInputWrapper">
            <label htmlFor="file">Upload File</label>
            <input
              type="File"
              name="file"
              value={user.file}
              id="file"
              onChange={(event) => HandleInputChange(event)}
              placeholder="Upload File"
            />
          </div> */}
            <div className="labelInputWrapper">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                id="username"
                onChange={(event) => HandleInputChange(event)}
                placeholder="User name"
              />
            </div>
            <div className="labelInputWrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                id="email"
                placeholder="Email"
                onChange={(event) => HandleInputChange(event)}
              />
            </div>
            {/* <div className="labelInputWrapper">
            <label htmlFor="Dob">Date of Birthday:</label>
            <input
              type="date"
              id="Dob"
              value={user.Dob}
              onChange={(event) => {
                HandleInputChange(event);
              }}
              name="Dob"
            />
          </div> */}
            <div className="labelInputWrapper">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                value={user.password}
                placeholder="Password"
                onChange={(event) => HandleInputChange(event)}
              />
            </div>
            {/* <div className="labelInputWrapper">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              value={cPassword}
              onChange={(event) => HandleInputChange(event)}
              placeholder="Confirm Password"
            />
          </div> */}
            {/* <div className="labelInputWrapper">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              value={user.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              onChange={(event) => HandleInputChange(event)}
              placeholder="Phone Number"
            />
          </div> */}
            {/* <div className="labelInputWrapper">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              value={user.street}
              name="street"
              onChange={(event) => HandleInputChange(event)}
              id="street"
              placeholder="Street"
            />
          </div>
          <div className="labelInputWrapper">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={user.city}
              name="city"
              onChange={(event) => HandleInputChange(event)}
              id="city"
              placeholder="City"
            />
          </div> */}
            {/* <div className="NGO_Wrapper">
            <label>
              <input
                name="isNgo"
                onChange={(event) => HandleInputChange(event)}
                value={user.isNgo}
                type="checkbox"
              />
              Are you from NGO?
            </label>
            <input
              type="text"
              onChange={(event) => HandleSecurityCheck(event)}
              value={securityKey}
            />
          </div> */}
            {/*
          <button
            onClick={(event) => {
              GetLiveLocation(event);
            }}
          >
            Access Location
          </button> */}
            <div className="SubmitBtnWrapper">
              <button>Log In</button>
            </div>
            <p>
              Are you an NGO user?<a href="">Sign Up here</a>
            </p>
            <p>
              Already a user? <a href="">Login Here</a>
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
