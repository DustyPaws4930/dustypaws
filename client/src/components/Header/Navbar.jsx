import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
        <nav>
          <ul>
            <Link to='/event'><li>Event</li></Link>
            <Link to='/donate'><li>Donate</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <div>
            <li className="nav-dropDown"><img src="" alt="user-profile"/></li>
            <div>
              <Link to='/signup'><li>Sign up</li></Link>
              <Link to='/login'><li>Login</li></Link>
            </div>
            </div>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
