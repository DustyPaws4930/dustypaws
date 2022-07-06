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

export const UpdateComplaintById = async (req, res) => {
  let id = req.params.id;
  let reportState = req.body.state;
  try {
    let reportData = await ReportModel.findByIdAndUpdate(id,{state:reportState}, { new: true });
    res.status(200).json({ report: reportData, message: "Report updated successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Error occured while updating State ${err}` });
  }
  
};
