// import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import { getToken } from "../Common";
// import { useRef } from "react";
// import jwt from "jwt-decode";
import Footer from "./Footer/Footer";
import "../index.css";
import "./home.css";

import Homepage from "./NGO/Homepage";
import HomePage from "./User/HomePage";

// import WarningIcon from "@fortawesome/free-solid-svg-icons";

const User = createContext();
const Home = () => {
  // In order to send any fetch request or any request we will send the request.header
  // In that we will pass token and if authorized token: Proceed else Not authorized

  // Sample request Function

  // const postdata = () => {

  // axios.post(
  //   "some url",
  //   // { body: json },
  //   { headers: { "x-access-token": `${token}` } }
  // );

  const [loggedInUser, setLoggedInUser] = useState(null);
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

  let RenderUI = () => {
    if (
      loggedInUser !== null &&
      loggedInUser !== "undefined" &&
      loggedInUser !== "" &&
      loggedInUser?.role === "ngo"
    ) {
      // NGO HOMEPAGE
      return <Homepage loggedInUser={loggedInUser} />;
    } else {
      // USER HOMEPAGE
      return <HomePage loggedInUser={loggedInUser} />;
    }
  };
  return (
    <>
      <User.Provider value={loggedInUser}>
        <Header />
        {RenderUI()}
        <Footer />
      </User.Provider>
    </>
  );
};

export default Home;
export { User };
