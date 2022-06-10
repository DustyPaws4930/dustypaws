import { Report } from "../../models/Report"

export const Complaint = (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let name = req.body.name;
    let isLocked = req.body.isLocked;
    let reportDate = req.body.reportDate;

    let report = new Report({
        title: title,
        description: description,
        name: name,
        isLocked: isLocked,
        reportDate: reportDate
    });
    report.save();
    console.log("Report object: " + report);
    res.status(200).json(user);

}