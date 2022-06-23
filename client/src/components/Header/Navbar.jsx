import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteToken } from "../../Common";
import { User } from "../Home";

const Navbar = () => {
  let loggedInUser = useContext(User);

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
          
            <li className="dropDown">
              <li className="btn btn-drop">
                Explore
              </li>
              <li className="dropDown-options active">
                <li>
                  <Link to="/explore">
                    option 1
                  </Link>
                </li>
                <li>
                  <Link to="/explore">
                    option 2
                  </Link>
                </li>
              </li>
            </li>
          {/* <Link to="/event">
            <li>Event</li>
          </Link> */}
          <Link to="/report">
            <li>Report</li>
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

  return (
    <>
      <nav>
        <ul>
          {RenderNavBar()}
          <div>
            <li className="nav-dropDown">            
              <img src="" alt="user-profile" />

              <div className="user-profile">
                <Link to="/signup">
                  <li>Sign up</li>
                </Link>
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="/login" onClick={HandleLogoutClick}>
                  <li>Logout</li>
                </Link>
              </div>

            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
