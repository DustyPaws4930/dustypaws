import React from "react";
import Navbar from "./Navbar";
import {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Primary from '../project-files/primary-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  

  return (
    <header>
      {/* <h1>Header page</h1> */}
      <div className="header-wrapper">
        <Link to="/">
          <div className="primary-logo">
            <img src={Primary} alt="logo" />
          </div>
        </Link>
        <div className="hamburger">
            <button onClick={()=> setShowNav(!showNav)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
        <Navbar showNav={showNav}/>
        {/* {menu} */}
      </div>
    </header>
  );
};

export default Header;
