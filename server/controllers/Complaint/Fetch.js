import ReportModel from "../../models/Report.js";
import UserModel from "../../models/User.js";

// const moment = require("moment");

import moment from "moment";

export const GetReportByUserId = (req, res) => {
  let { userId } = req.params;
  ReportModel.find({ userId: userId }).then((complaints, err) => {
    if (err) {
      console.log("Error " + err);
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ complaints });
    }
  });
};

export const GetAllComplaints = (req, res) => {
  ReportModel.find({}).then((complaints, err) => {
    if (err) {
      console.log("Error " + err);
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ complaints });
    }
  });
};

export const GetReportCount = (req, res) => {
  ReportModel.find({})
    .count()
    .then((count, err) => {
      if (err) {
        console.log("Error " + err);
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ count });
      }
    });
};

export const GetNGOUserVisualizationData = async (req, res) => {

  const monthsArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
  const monthCOunt = {};
  monthsArray.forEach(element => {
    const firstdate = moment().month(element).startOf("month").format("DD-MM-YYYY");
    console.log(firstdate);
    const lastdate = moment().month(element).endOf("month").format("DD-MM-YYYY");
  console.log(lastdate);
  const count = UserModel.find({
    $and: [
      {role:"ngo"},
      {
        createdAt: {
          $gte: firstdate,
          $lt: lastdate,
        },
      },
    ],
  }).count();
    monthCOunt[element] = count;

  });

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).format("DD-MM-YYYY");
  }

  const firstdate = moment().startOf("month").format("DD-MM-YYYY");
  console.log(firstdate);

  const lastdate = moment().month().endOf("month").format("DD-MM-YYYY");
  console.log(lastdate);
  if (err) {
    console.log("Error " + err);
    res.status(500).json({ message: err.message });
  } else {
  res.status(200).json( monthCOunt );
  }
  
};
