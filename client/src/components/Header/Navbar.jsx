import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteToken, getToken } from "../../Common";
import { User } from "../Home";
import PopUp from "../ModelPopups/PopUp";

const Navbar = () => {
  let loggedInUser = useContext(User);

  const [loginPopUp, setLoginPopUp] = useState(false);

  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const RenderNavBar = () => {
    if (loggedInUser?.role === "NGO") {
      return (
        <Link to="/event">
          <li>Create Event</li>
        </Link>
      );
    } else {
      return (
        <>
          <Link to="/event">
            <li>Event</li>
          </Link>
          <Link to="/donate">
            <li>Donate</li>
          </Link>
          <Link to="/about">
            <li>About us </li>
          </Link>
        </>
      );
    }
  };
  const HandleLogoutClick = () => {
    deleteToken();
    window.location.reload();
    alert("Logged out!!");
  };

  const ShowSignUpPopUp = (e) => {
    setSignUpPopUp(!signUpPopUp);
  };

  const ShowLoginPopUp = (e) => {
    setLoginPopUp(!loginPopUp);
  };

  let popUpContent = "";
  if (signUpPopUp) {
    popUpContent = <PopUp TogglePopUp={ShowSignUpPopUp} showSignUp={true} />;
  }
  if (loginPopUp) {
    popUpContent = <PopUp TogglePopUp={ShowLoginPopUp} showLogin={true} />;
  }

  const HandleLoggedInUI = () => {
    let usertoken = getToken();
    if (usertoken !== null && usertoken !== "undefined" && usertoken !== "") {
      return (
        <>
          <a href="#" onClick={HandleLogoutClick}>
            <li>Logout</li>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href="#" onClick={ShowSignUpPopUp}>
            <li>Sign up</li>
          </a>
          <a href="#" onClick={ShowLoginPopUp}>
            <li>Login</li>
          </a>
        </>
      );
    }
  };

  useEffect(
    (e) => {
      HandleLoggedInUI();
    },
    [HandleLoggedInUI]
  );

  return (
    <>
      <nav>
        <ul>
          {RenderNavBar()}
          <div>
            <li className="nav-dropDown">
              <img src="" alt="user-profile" />
            </li>
          </div>
          {HandleLoggedInUI()}
        </ul>
      </nav>
      {popUpContent}
    </>
  );
};

export default Navbar;
