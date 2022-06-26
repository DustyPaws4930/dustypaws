import ReportModel from "../../models/Report.js";
import fs from "fs";

export const Register = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let priority = req.body.priority;
  let userId = req.body.userId;
  let location = req.body.location;

  const file = fs.readFileSync(req.file.path);
  const imgStr = Buffer.from(file).toString("base64");

  let reportObj = new ReportModel({
    title: title,
    description: description,
    name: name,
    phoneNumber: phoneNumber,
    Image: imgStr,
    userId: userId,
    location: location,
    priority: priority,
  });

  console.log("Report object: " + reportObj);
  reportObj.save((err, savedReport) => {
    if (!err) {
      let resMsg = "Complaint Registered.";
      console.log(resMsg);
      return res.status(200).json({ Complaint: savedReport, message: resMsg });
    } else {
      console.log(`Unable to create complaint with ${reportObj}`);
      return res.status(400).json({
        message: `Error occured while registering a complaint ${err}`,
      });
    }
  });
};

