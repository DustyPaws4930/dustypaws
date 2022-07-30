import React, { useState } from "react";
import { useEffect } from "react";
import LineChart from "../../Charts/LineChart";
import { getApiPath, getToken } from "../../../Common";
import axios from "axios";
const Rewards = () => {
  const [userRewards, setUserRewards] = useState({});
  let [totalRewardsPoints, setTotalRewardsPoints] = useState(0);

  useEffect(() => {
    let userToken = getToken();
    axios
      .get(getApiPath() + `user/${userToken.user._id}`)
      .then((res) => {
        let Urewards = res.data.rewardsEarned;
        if (Urewards !== "" && Urewards !== undefined) {
          setUserRewards({
            labels: Urewards.map((data) => data.month),
            datasets: [
              {
                label: "Rewards",
                data: Urewards.map((data) => data.rewards),
                backgroundColor: ["#285b53"],
                borderColor: "#285b53",
                borderWidth: 2,
                bezierCurve: false,
              },
            ],
          });

          let points = 0;
          Urewards.map((data) => {
            return (points += data.rewards);
          });
          setTotalRewardsPoints(points);
        }
      })
      .catch((err) => {
        console.log("unable to get request user");
      });
  }, [setUserRewards, setTotalRewardsPoints]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className="userRewardsContainer">
      <div className="rewardsHeading">
        <h1>Rewards Trackers</h1>
      </div>
      <div className="rewardsChart">
        <div className="userChart">
          {Object.keys(userRewards).length > 0 ? (
            <>
              <LineChart chartData={userRewards} options={options} />
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
