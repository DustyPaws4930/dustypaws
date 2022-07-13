import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../../Common";
import PopUp from "../ModelPopups/PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AnimatedDropdown from "../dropdown/AnimatedDropdown";
import { toast } from "react-toastify";
import BirdAvatar from "../images/Bird_Avatar.png";
import PandaAvatar from "../images/Panda_Avatar.png";
import HamsterAvatar from "../images/Hamster_Avatar.png";
import DogAvatar from "../images/Dog_Avatar.png";
import CatAvatar from "../images/Cat_Avatar.png";
const Navbar = (props) => {
  // let loggedInUser = useContext(User);
  let navigate = useNavigate();

  const options = ["Event", "Partners"];
  const initialText = "Explore";
  const [activeUser, setActiveUser] = useState(false);
  // function handleUserClick(event){
  //   setActiveUser
  // }

  function handleDropDown(option) {
    switch (option) {
      case "Event":
        navigate("/event", { replace: true });
        break;
      case "Partners":
        navigate("/event", { replace: true });
        break;
      default:
        break;
    }
  }

  const [loggedInUser, setLoggedInUser] = useState({});
  let [selectedUserEmoji, setSelectedUserEmoji] = useState(BirdAvatar);
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
      SetImageForUI(userToken?.user.selectedEmoji);
    }
  }, []);

  function SetImageForUI(name) {
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

    toast.warning("Logged out!!", {
      position: "top-center",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 500);
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
            <li
              className="nav-dropDown"
              onClick={(e) => {
                setActiveUser(!activeUser);
              }}
            >
              <div className="user-icons">
                <div className="userAvatar">
                  <img src={selectedUserEmoji} alt="User Avatar" />
                </div>
                <div className="userDropDown">
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>

              <div className="user-profile" id={activeUser ? "activeUser" : ""}>
                {HandleLoggedInUI()}
              </div>
            </li>
          </div>
        </ul>
      </nav>
      {popUpContent}
    </>
  );
};

export default Navbar;
