import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../../Common";
import { User } from "../Home";
import PopUp from "../ModelPopups/PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import AnimatedDropdown from "../dropdown/AnimatedDropdown";

const Navbar = (props) => {
  // let loggedInUser = useContext(User);
  let navigate = useNavigate();

  const options = ["Event", "Partners"];
  const initialText = "Explore";
  const navDropStyle = {
    boxShadow: "10px 10px 50px #aaaaaa",
  };
  const [activeUser, setActiveUser] = useState(false);
  // function handleUserClick(event){
  //   setActiveUser
  // }


  function handleDropDown(option) {
    console.log(`Navbar`, option);
    switch (option) {
      case "Event":
        navigate("/event", { replace: true });
        break;
      case "Partners":
        navigate("/Partners", { replace: true });
        break;
      default:
        break;
    }
  }

  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    let userToken = getToken();

    if (userToken == null) {
      return;
    } else if (
      userToken !== null &&
      userToken !== "undefined" &&
      userToken !== ""
    ) {
      setLoggedInUser(userToken?.user);
    }
  }, []);

  const [loginPopUp, setLoginPopUp] = useState(false);

  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const RenderNavBar = () => {
    if (loggedInUser?.role === "ngo") {
      return (
        <Link to="/eventform">
          <li>Create Event</li>
        </Link>
      );
    } else {
      return (
        <>
          <ul className="nav-dropDown">
            <AnimatedDropdown
              onOptionSelect={handleDropDown}
              options={options}
              initialText={initialText}
              dropStyle={navDropStyle}
            />
          </ul>
          <a href="/#reportSection">
            <li>Report</li>
          </a>
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
    window.location.href = "/";
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
          <div className="securityWrapper">
            <Link to="/profile">Profile</Link>
            <a href="#" onClick={HandleLogoutClick}>
              Logout
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="securityWrapper">
            <Link to="/signup">Sign&nbsp;Up</Link>
            <Link to="/login">Login</Link>
          </div>
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
      <nav className={props.showNav ? "active" : ""}>
        <ul>
          {RenderNavBar()}
          <div>
            <li className="nav-dropDown" onClick={(e) => {
             setActiveUser(!activeUser);
          }}
          
          >
              <div className="user-icons">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="user-profile" id={activeUser ? 'activeUser': ''}>{HandleLoggedInUI()}</div>
            </li>
          </div>
        </ul>
      </nav>
      {popUpContent}
    </>
  );
};

export default Navbar;
