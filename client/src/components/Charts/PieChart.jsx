import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getApiPath } from "../../Common";

const PieChart = ({ chartData }) => {
  const [dataCount, setDataCount] = useState([]);

  useEffect(() => {
    let datCountURl = getApiPath() + "data/getNGOUserCount/";

    axios
      .get(datCountURl)
      .then((res) => {
        console.log(res.data);
        setDataCount(res.data);
      })
      .catch((err) => {
        console.log(`Error occured while getting data count ${err}`);
      });
  }, [setDataCount]);
  return <div>{/* <Pie data={dataCount} /> */}</div>;
};

export default PieChart;
