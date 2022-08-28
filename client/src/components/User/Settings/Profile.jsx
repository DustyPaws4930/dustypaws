import React from "react";
import Info from "./Info";
import Reports from "./Reports";
import Rewards from "./Rewards";
import Whislist from "./Whislist";
import Header from "../../Header/Header";
import "./Profile.css";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { getLoggedInUser } from "../../../Common";

const Profile = () => {
  let [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(
    (e) => {
      let logUser = getLoggedInUser();

      if (logUser !== "") {
        setLoggedInUser(logUser);
      }
    },
    [setLoggedInUser]
  );

  return (
    <div>
      <Header />
      <div className="profile-user">
        <Info />
        {loggedInUser !== null && loggedInUser.role !== "ngo" ? (
          <>
            <Rewards />
            <Whislist />
            <Reports />
          </>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
