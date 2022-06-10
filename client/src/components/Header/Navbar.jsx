import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteToken } from "../../Common";
import { User } from "../Home";

const Navbar = () => {
  let loggedInUser = useContext(User);

  const RenderNavBar = () => {
    if (loggedInUser?.role === "NGO") {
      return (
        <Link to="/eventform">
          <li>Create Event</li>
        </Link>
      );
    } else {
      return (
        <>
            <li>Explore 
              <img src="" alt="arrow down"/> </li>
              {/* arrow down png to be added */}
               <div>
                  <ul>
                      <Link to='/event'><li>Events</li></Link>
                      <Link to='/partners'> <li>Partners</li> </Link>
                    </ul>
               </div>


          {/* <label>Explore
              <select>
              <option><Link to='/event'>Events</Link></option>
                  <Link to='/partners'> <option>Partners</option> </Link>
              </select>
          </label> */}


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
            </li>
            <div>
              <Link to="/signup">
                <li>Sign up</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              {/* <Link to="/login" onClick={HandleLogoutClick}>
                <li>Logout</li> 
              </Link> */} 
              {/* Log out is not needed here pls check n remove. */}
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
