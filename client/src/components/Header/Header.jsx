import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <h1>Header page</h1> */}
      <Link to="/">
        <img src="" alt="logo" />{" "}
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
