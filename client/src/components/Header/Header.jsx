import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./header.css";
import Primary from '../project-files/primary-logo.png';

const Header = () => {
  return (
    <header>
      {/* <h1>Header page</h1> */}
      <div className="header-wrapper">
        <Link to="/">
          {/* <div className="primary-logo"></div> */}
          <img src={Primary} alt="logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
