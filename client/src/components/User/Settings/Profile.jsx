import React from "react";
import Info from "./Info";
import Reports from "./Reports";
import Rewards from "./Rewards";
import Whislist from "./Whislist";
import Header from "../../Header/Header";

const Profile = () => {
  return (
    <div>
      <Header />
      <Info />
      <Reports />
      <Rewards />
      <Whislist />
    </div>
  );
};

export default Profile;
