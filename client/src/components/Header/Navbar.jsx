import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

  const RenderUserNavBar = () => {};

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
              <Link to="/signup">
                <li>Sign up</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
