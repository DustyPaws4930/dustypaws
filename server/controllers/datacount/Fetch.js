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
  const monthCOunt = [];
  monthsArray.forEach((element,index) => {
    const firstdate = moment().month(element).startOf("month");
    console.log("firstdate     " + firstdate.toISOString());
    const lastdate = moment().month(element).endOf("month");
    console.log("lastdate   ", lastdate.toISOString());
    const count = UserModel.find({
      $and: [
        { role: "ngo" },
        {
          createdAt: {
            $gte: firstdate.toISOString(),
            $lt: lastdate.toISOString(),
          },
        },
      ],
    })
      .count()
      .then((count, err) => {
        if (err) {
          console.log("Error " + err);
          // res.status(500).json({ message: err.message });
        } else {
          console.log("count count 59 " + count);
          monthCOunt.push({
            month: element,
            count: count,
          });
          console.log(monthCOunt);
          console.log("67");
          if (index == 11) {
            res.status(200).json(monthCOunt);
          }
        }
      });
  });

};
