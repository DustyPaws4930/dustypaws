import React from "react";

let ReportComplaints = () => {
    
  return (
    <>
      <div className="sitePage">
        <h1>Report Complaint</h1>

        <form action="/report-complaint" method="POST">
          <label>
            Title of Complaint
            <input type="text" name="title" />
          </label>

          <label>
            Description of Complaint
            <input type="text" name="description" />
          </label>

          <label for="img">
            Upload image:
            <input type="file" id="img" name="img" accept="image/*"></input>
          </label>

          <label>
            Name
            <input type="text" name="name" />
          </label>

          <label for="isLocked">
            Is Locked:
            <select name="isLocked" id="isLocked">
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>

          <label>
            Report Date:
            <input type="date" name="reportDate" />
          </label>

          <label>
            Contact No.:
            <input
              type="number"
              placeholder="between 0 and 9"
              value="0"
              name="contact"
            />
          </label>

          <label>
            Priority:
            <input
              type="number"
              min="1"
              max="5"
              placeholder="between 1 and 5"
              value="1"
              name="priority"
            />
          </label>

          <input type="submit" value="Registered Complaint" />
        </form>
      </div>
    </>
  );
};

export default ReportComplaints;
