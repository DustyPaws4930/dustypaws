import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteToken } from "../../Common";
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

  return (
    <>
      <nav>
        <ul>
          {RenderNavBar()}
          <div>
            <li className="nav-dropDown">
              <img src="" alt="user-profile" />
            </li>
            <div>
              <a href="#" onClick={ShowSignUpPopUp}>
                <li>Sign up</li>
              </a>
              <a href="#" onClick={ShowLoginPopUp}>
                <li>Login</li>
              </a>
              <Link to="/login" onClick={HandleLogoutClick}>
                <li>Logout</li>
              </Link>
            </div>
          </div>
        </ul>
      </nav>
      {popUpContent}
    </>
  );
};

export default Navbar;
