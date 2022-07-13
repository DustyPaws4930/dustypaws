import React from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getApiPath } from "../../Common";

const PieChart = () => {

  const [ngoUserData, setNgoUserData] = useState({});
  useEffect(() => {
    let datCountURl = getApiPath() + "data/getNGOUserCount/";
    axios
      .get(datCountURl)
      .then((res) => {
        console.log(res.data);
        setNgoUserData({
          labels: res.data.map((data) => data.month),
          datasets: [
            {
              label: "NGO User Joined",
              data: res.data.map((data) => data.count),
              backgroundColor: ["#deb141"],
              borderColor: "#285b53",
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(`Error occured while getting data count ${err}`);
      });
  }, [setNgoUserData]);
  return (
    <>
      <div>
        {Object.keys(ngoUserData).length > 0 ? (
          <Pie data={ngoUserData} />
        ) : (
          "Loading.."
        )}
      </div>
    </>
  );
};

export default PieChart;
