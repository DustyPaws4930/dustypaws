import ReportModel from "../../models/Report.js";
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
