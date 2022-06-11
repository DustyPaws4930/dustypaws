import axios from "axios";
import React, { useState } from "react";
import { getApiPath } from "../../Common";
import PopUp from "../Footer/ModelPopups/PopUp";
import "./Report.css";

let Report = () => {
  let [popUp, setPopUp] = useState(false);
  let TogglePopUp = () => {
    setPopUp(!popUp);
  };

  let PopUpContent;
  if (popUp) {
    PopUpContent = <PopUp TogglePopUp={TogglePopUp} />;
  }

  const [reportData, setReportData] = useState({
    title: "",
    description: "",
    name: "",
    reportDate: "",
  });

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReportData({ ...reportData, [name]: value });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const reportUrl = getApiPath() + "complaint/report";
    axios
      .post(reportUrl, reportData)
      .then((res) => {})
      .catch((err) => {
        alert(`Error Occured: ${err.response.data.message}`);
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <section className="report-complaint">
        <h1>Report Complaint</h1>
        <form
          action="/"
          onSubmit={(e) => {
            handleSubmitBtn(e);
          }}
        >
          <div className="labelInputWrapper">
            <label>
              Title
              <input
                type="text"
                onChange={(event) => onInputChange(event)}
                name="title"
              />
            </label>
          </div>
          <div className="labelInputWrapper">
            <label>
              Description
              <input
                type="text"
                name="description"
                id="description"
                placeholder="please briefly describe the event"
              />
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
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name"
              />
            </label>
          </div>
          <div className="labelInputWrapper">
            <label>
              Contact Number
              <input
                type="tel"
                name="name"
                id="contact-number"
                placeholder="000-000-0000"
              />
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
          <div>
            <label htmlFor="priority">Priority Flag</label>
            <button
              className="priority-flag"
              id="priorityEmergency"
              type="button"
            >
              Emergency
            </button>
            <button
              className="priority-flag"
              id="priorityModerate"
              type="button"
            >
              Moderate
            </button>
            <button className="priority-flag" id="priorityHigh" type="button">
              High
            </button>
          </div>

          {/* <label>
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
          </label> */}
          <input type="submit" value="Registered Complaint" />
        </form>
      </section>
    </>
  );
};

export default Report;
