import React from "react";
import Navbar from './Navbar'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        {/* <h1>Header page</h1> */}
      <Link to='/'><img src="" alt='logo' /> </Link>
      <Navbar />
    </>
  );
};

export default Header;
