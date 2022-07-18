import React from "react";
import Info from "./Info";
import Reports from "./Reports";
import Rewards from "./Rewards";
import Whislist from "./Whislist";
import Header from "../../Header/Header";
import "./Profile.css";
import Footer from "../../Footer/Footer";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile-user">
        <Info />
        <Rewards />
        <Whislist />
        <Reports />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
