import ReportModel from "../../models/Report.js";
import UserModel from "../../models/User.js";

// const moment = require("moment");

import moment from "moment";

export const GetReportCount = (req, res) => {
  ReportModel.find({})
    .count()
    .then((count, err) => {
      if (err) {
        console.log("Error " + err);
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ count: count });
      }
    });
};

export const GetNGOUserVisualizationData = async (req, res) => {
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthCount = [];
  monthsArray.forEach(async (element, index) => {
    const firstdate = moment().month(element).startOf("month");
    const lastdate = moment().month(element).endOf("month");
    let count = await getNGOUserCountPerMonth(firstdate, lastdate);
    monthCount.push({
      month: element,
      count: count,
    });
    if (index == monthsArray.length - 1) {
      console.log(monthCount.length);
      res.status(200).json(monthCount);
    }
  });
};

async function getNGOUserCountPerMonth(firstdate, lastdate) {
  try {
    let count = await UserModel.find({
      $and: [
        { role: "ngo" },
        {
          createdAt: {
            $gte: firstdate.toISOString(),
            $lt: lastdate.toISOString(),
          },
        },
      ],
    }).count();
    return count;
  } catch (err) {
    return 0;
  }
}
