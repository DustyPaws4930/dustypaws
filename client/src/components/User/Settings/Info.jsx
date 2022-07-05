import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { getApiPath, getToken, setToken } from "../../../Common";
import { toast } from "react-toastify";
// import { UserProfileImage } from "../../project-files/13.png"

const Info = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    Dob: "",
    gender: "",
    password: "password",
  });
  const [loggedInUser, setLoggedInUser] = useState({});

  const allGenders = ["Man", "Woman", "Non-Binary", "Prefer not to answer"];

  // Handle input Change
  const HandleOnChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // called when page is loaded initially
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== "undefined" && userToken !== "") {
      setLoggedInUser(userToken.user);
      setUserInfo(userToken.user);
      console.log(userToken.user);
    }
  }, [setLoggedInUser]);

  // Form Submission handler
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);

    let updateUrl = getApiPath() + `user/update/${loggedInUser._id}`;
    axios
      .patch(updateUrl, userInfo)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          const userToken = jwt(res.data.user); // decode your token here
          setToken(res.data.user);
          setUserInfo({ ...userInfo, userInfo: userToken });
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
    <div className="userInfoContainer">
      <form
        onSubmit={(e) => {
          HandleFormSubmit(e);
        }}
      >
        <div className="headerContainer">
          <h3>Test Username</h3>
        </div>
        <div className="userImage">
          <img src="" alt="" />
        </div>
        <div className="formDetails">
          <div className="formWrapper">
            <h3>About</h3>

            <div className="containerInfoWrapper">
              <h5>Contact Information</h5>
              <div className="labelInputWrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userInfo.username || ""}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="username"
                />
              </div>

              <div className="labelInputWrapper">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="phoneNumber"
                />
              </div>

              <div className="labelInputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="email"
                />
              </div>

              <div className="AddressInfoContainer">
                <div className="labelInputWrapper">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    value={userInfo.address}
                    onChange={(e) => {
                      HandleOnChange(e);
                    }}
                    name="address"
                    id="address"
                  />
                </div>
              </div>
            </div>
            <div className="basicInfoWrapper">
              <h5>Basic Information</h5>

              <div className="labelInputWrapper">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="Dob"
                  value={userInfo.Dob}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="Dob"
                />
              </div>

              <div className="labelInputWrapper">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  value={userInfo.gender}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="name"
                >
                  {allGenders.map((gender, idx) => {
                    return (
                      <option key={idx} value={gender}>
                        {gender}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="securityWrapper">
              <h5>Security and Privacy</h5>

              <div className="labelInputWrapper">
                <label htmlFor="password">Update Password</label>
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={(e) => {
                    HandleOnChange(e);
                  }}
                  id="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="UserUpdateBtn">
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default Info;
