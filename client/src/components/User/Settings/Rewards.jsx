import React, { useState } from "react";
import { useEffect } from "react";
import UserData from "../../../Data";
import LineChart from "../../Charts/LineChart";
import { getToken } from "../../../Common";

const Rewards = () => {
  const [userRewards, setUserRewards] = useState({});
  let [totalRewardsPoints, setTotalRewardsPoints] = useState(0);

  useEffect(() => {
    let userToken = getToken();
    if (userToken == null) {
      return;
    } else if (
      userToken !== null &&
      userToken !== "undefined" &&
      userToken !== ""
    ) {
      let Urewards = userToken?.user.rewardsEarned;
      if (Urewards !== "" && Urewards !== undefined) {
        setUserRewards({
          labels: Urewards.map((data) => data.month),
          datasets: [
            {
              label: "Rewards",
              data: Urewards.map((data) => data.rewards),
              backgroundColor: ["#deb141"],
              borderColor: "#285b53",
              borderWidth: 2,
            },
          ],
        });

        let points = 0;
        Urewards.map((data) => {
          return (points += data.rewards);
        });
        setTotalRewardsPoints(points);
      }
    }
  }, [setUserRewards, setTotalRewardsPoints]);

  return (
    <div className="userRewardsContainer">
      <div className="rewardsHeading">
        <h1>Rewards Trackers</h1>
      </div>
      <div className="rewardsChart">
        <div className="userChart" >
          {Object.keys(userRewards).length > 0 ? (
            <>
              <LineChart chartData={userRewards} />
            </>
          ) : (
            <></>
          )}
          {/* <LineChart chartData={userRewards} /> */}
        </div>
        <div className="RewardsInfo">
          <h4>Current Rewards</h4>
          <p>Count: {totalRewardsPoints} pts</p>
          <a href="/" rel="noopener noreferrer">
            Report Case
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
