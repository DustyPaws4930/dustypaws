import React, { useState } from "react";
import UserData from "../../../Data";
import LineChart from "../../Charts/LineChart";

const Rewards = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Rewards",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#734440",
          "#734440",
          "#734440",
          "#734440",
          "#734440",
        ],
        borderColor: "#ddd",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="userRewardsContainer">
        <div className="rewardsHeading">
          <h3>Rewards Trackers</h3>
        </div>
      <div className="rewardsChart" >
          <div className="userChart" style={{width: 500}}>
            <LineChart chartData={userData} />
          </div>
        <div className="RewardsInfo">
          <h4>Current Rewards</h4>
          <p>Count: 100pts</p>
          <a href="/" rel="noopener noreferrer" >
            Report Case
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
