import React, { useState } from "react";
import PopUp from "./Footer/ModelPopups/PopUp";
import "./ReportComplaint.css";
let ReportComplaints = () => {
  let [popUp, setPopUp] = useState(false);
  let TogglePopUp = () => {
    setPopUp(!popUp);
  };

  let PopUpContent;
  if (popUp) {
    PopUpContent = <PopUp TogglePopUp={TogglePopUp} />;
  }

  return (
    <>
      <div className="sitePage">
        <h1>Report Complaint</h1>

        <form action="/report-complaint" method="POST">
          <div className="labelInputWrapper">
            <label>
              Title of Complaint
              <input type="text" name="title" />
            </label>
          </div>
          <div className="labelInputWrapper">
            <label>
              Description of Complaint
              <input type="text" name="description" />
            </label>
          </div>
          <div className="labelInputWrapper">
            <label for="img">
              Upload image:
              <input type="file" id="img" name="img" accept="image/*"></input>
            </label>
          </div>
          <div className="labelInputWrapper">
            <label>
              Name
              <input type="text" name="name" />
            </label>
          </div>

          <div className="labelInputWrapper">
            <label for="isLocked">
              Is Locked:
              <select name="isLocked" id="isLocked">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </label>
          </div>
          <div className="labelInputWrapper">
            <label>
              Report Date:
              <input type="date" name="reportDate" />
            </label>
          </div>
          <div className="LocationWrapper">
            <label>
              Location
              <a className="LocationBtn" onClick={TogglePopUp}>
                Get Location
              </a>
            </label>
          </div>

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
