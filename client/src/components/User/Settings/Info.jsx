import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { getApiPath, getToken, setToken } from "../../../Common";
import { toast } from "react-toastify";
import EmojiPopUp from "../../ModelPopups/EmojiPopUp";
// import { UserProfileImage } from "../../project-files/13.png"

import BirdAvatar from "../../images/Bird_Avatar.png";
import PandaAvatar from "../../images/Panda_Avatar.png";
import HamsterAvatar from "../../images/Hamster_Avatar.png";
import DogAvatar from "../../images/Dog_Avatar.png";
import CatAvatar from "../../images/Cat_Avatar.png";
import Edit_UserImage from "../../images/Edit_Profile.png";
const Info = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    Dob: "",
    gender: "Male",
    selectedEmoji: "Bird",
    password: "password",
  });

  let [popUp, setPopUp] = useState(false);
  let [selectedUserEmoji, setSelectedUserEmoji] = useState(BirdAvatar);
  let [avatarName, setAvatarName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});

  const allGenders = ["Male", "Female", "Non-Binary", "Prefer not to answer"];

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
      SetImageForUI(userToken.user?.selectedEmoji);
    }
  }, [setLoggedInUser]);

  // Form Submission handler
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);

    userInfo.selectedEmoji = avatarName;
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

  // To show the popup
  const TogglePopUp = () => {
    setPopUp(!popUp);
  };

  const HandleEditEmoji = (e) => {
    e.preventDefault();
    TogglePopUp();
  };
  const setSelectedImage = (e) => {
    let name = e.target.name;

    SetImageForUI(name);

    TogglePopUp();
  };

  let PopUpContent = "";
  if (popUp) {
    PopUpContent = (
      <EmojiPopUp
        setSelectedImage={setSelectedImage}
        TogglePopUp={TogglePopUp}
      />
    );
  }

  function SetImageForUI(name) {
    userInfo.selectedEmoji = name;
    setAvatarName(name);
    switch (name) {
      case "Bird":
        setSelectedUserEmoji(BirdAvatar);
        break;
      case "Dog":
        setSelectedUserEmoji(DogAvatar);
        break;
      case "Hamster":
        setSelectedUserEmoji(HamsterAvatar);
        break;
      case "Cat":
        setSelectedUserEmoji(CatAvatar);
        break;
      case "Panda":
        setSelectedUserEmoji(PandaAvatar);
        break;
      default:
        setSelectedUserEmoji(BirdAvatar);
    }
  }

  return (
    <div className="userInfoContainer">
      <form
        onSubmit={(e) => {
          HandleFormSubmit(e);
        }}
      >
        <div className="headerContainer">
          <h2>{userInfo.username}</h2>
        </div>
        <div className="userImage">
          <div className="userImageWrapper">
            <img src={selectedUserEmoji} alt="User Icon" />
          </div>
          <button
            className="editEmojiBtn"
            onClick={(e) => {
              HandleEditEmoji(e);
            }}
          >
            <img src={Edit_UserImage} alt="" />
          </button>
        </div>
        {PopUpContent}
        <div className="formDetails">
          <div className="formWrapper">
            <h3>About</h3>

            <div className="containerInfoWrapper">
              <h4 className="ContactInfoHeader">Contact Information</h4>
              <div className="upperInfoWrapper">
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
            </div>
            <div className="basicInfoWrapper">
              <h4 className="ContactInfoHeader">Basic Information</h4>
              <div className="midInfoWrapper">
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
            </div>
            <div className="securityWrapper">
              <h3>Security and Privacy</h3>
              <div className="labelInputWrapper">
                <label htmlFor="password">Update Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="New password"
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
