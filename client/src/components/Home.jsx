import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import { getToken } from "../Common";
import jwt from "jwt-decode";
import Footer from "./Footer/Footer";
import Report from "./Complaint/Report";

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

  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== "undefined" && userToken !== "");
    setLoggedInUser(userToken.user);
  }, [setLoggedInUser]);

  return (
    <>
      <h1>Home page</h1>
      <User.Provider value={loggedInUser}>
        <Header />
        <Report />
        <Footer />
      </User.Provider>
    </>
  );
};

export default Home;
export { User };
