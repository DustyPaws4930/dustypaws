import ReportModel from "../../models/Report.js";
import UserModel from "../../models/User.js";
import jwt from "jsonwebtoken";
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

export const UpdateComplaintById = async (req, res) => {
  let id = req.params.id;
  let reportState = req.body.state;
  try {
    let reportData = await ReportModel.findByIdAndUpdate(
      id,
      { state: reportState },
      { new: true }
    );

    if (reportState === "Completed") {
      let currentMonth = new Date().toLocaleString("default", {
        month: "long",
      });
      let fetchedUser = await UserModel.findById(reportData.userId);
      let monthFound = false;
      for (let index = 0; index < fetchedUser.rewardsEarned.length; index++) {
        let currentValue = fetchedUser.rewardsEarned[index];
        if (currentValue.month == currentMonth) {
          currentValue.rewards += 10;
          monthFound = true;
        }
      }
      if (!monthFound) {
        fetchedUser.rewardsEarned.push({ month: currentMonth, rewards: 10 });
      }

      UserModel.findByIdAndUpdate(fetchedUser._id, fetchedUser, {
        new: true,
      })
        .then((user) => {
          const token = jwt.sign(
            {
              user,
            },
            "Langara123"
          );
          res.status(200).json({ user: token, message: "Status Updated" });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ message: `Error occured while updating State ${err}` });
        });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Error occured while updating State ${err}` });
  }
};
