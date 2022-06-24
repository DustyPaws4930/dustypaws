import ReportModel from "../../models/Report.js";
export const GetReportByUserId = (req, res) => {
  let { userId } = req.params;
  ReportModel.find({ userId: userId }).then((complaints, err) => {
    if (err) {
      console.log("Err" + err);
    } else {
      res.status(200).json({ complaints });
    }
  });
};
