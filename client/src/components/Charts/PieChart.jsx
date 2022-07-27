import React from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getApiPath } from "../../Common";
import PropagateLoader from "react-spinners/PropagateLoader";

const PieChart = () => {
  const [ngoUserData, setNgoUserData] = useState({});
  let [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 0 0.8rem 0",
    borderColor: "red",
    backgroundColor: "#deb141",
  };
  useEffect(() => {
    let datCountURl = getApiPath() + "data/getNGOUserCount/";

    setLoading(true);
    axios
      .get(datCountURl)
      .then((res) => {
        setNgoUserData({
          labels: res.data.map((data) => data.month),
          datasets: [
            {
              label: "NGO User Joined",
              data: res.data.map((data) => data.count),
              backgroundColor: ["#deb141", "#285b53"],
              borderWidth: 1,
            },
          ],
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Error occured while getting data count ${err}`);
      });
  }, [setNgoUserData]);

  return (
    <>
      <div>
        {Object.keys(ngoUserData).length > 0 && !loading ? (
          <Pie data={ngoUserData} />
        ) : (
          <PropagateLoader
            color="#deb141"
            loading={loading}
            cssOverride={override}
            size={12}
          />
        )}
      </div>
    </>
  );
};

export default PieChart;
