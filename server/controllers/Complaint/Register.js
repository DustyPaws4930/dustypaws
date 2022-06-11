import ReportModel from "../../models/Report.js";
import fs from "fs";

export const Register = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let priority = req.body.priority;

  const file = fs.readFileSync(req.file.path);
  const imgStr = Buffer.from(file).toString("base64");

  let reportObj = new ReportModel({
    title: title,
    description: description,
    name: name,
    phoneNumber: phoneNumber,
    Image: imgStr,
    priority: priority,
  });

  console.log("Report object: " + reportObj);
  reportObj.save((err, savedReport) => {
    if (!err) {
      console.log("Complaint Registered and sent to client");
      return res.status(200).json({ Complaint: savedReport });
    } else {
      console.log(`Unable to create complaint with ${reportObj}`);
      return res.status(400).json({
        message: `Error occured while registering a complaint ${err}`,
      });
    }
  });
};

export default Register;
