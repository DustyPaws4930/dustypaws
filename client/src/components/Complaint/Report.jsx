import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getApiPath, getToken } from "../../Common";
import PopUp from "../ModelPopups/PopUp";
import "./Report.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

let Report = () => {
  // ***Declare all variables here***
  let PopUpContent;
  let [popUp, setPopUp] = useState(false);
  let [priority, setPriority] = useState(0);
  let [loggedInUser, setLoggedInUser] = useState({});
  let [complaintImage, setComplaintImage] = useState();
  let [reportData, setReportData] = useState({
    title: "",
    description: "",
    Image: File,
    name: "",
    phoneNumber: "",
  });

  // ***Declare Functions here***F
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== "undefined" && userToken !== "") {
      setLoggedInUser(userToken.user);
      console.log(userToken);
    } else {
      setReportData({
        name: "",
        phoneNumber: "",
      });
    }
  }, [setLoggedInUser]);

  // To show the popup
  const TogglePopUp = () => {
    setPopUp(!popUp);
  };

  // All input change event handler
  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReportData({ ...reportData, [name]: value });
  };

  // form submit event handler
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.append("title", reportData.title);
    bodyFormData.append("description", reportData.description);
    bodyFormData.append("name", reportData.name);
    bodyFormData.append("contactNumber", reportData.phoneNumber);
    bodyFormData.append("Image", complaintImage);
    bodyFormData.append("priority", priority);

    const reportUrl = getApiPath() + "complaint/register";
    axios({
      method: "POST",
      url: reportUrl,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };

  // File change event handler
  const handleFileChange = (e) => {
    setComplaintImage(e.target.files[0]);
  };

  // Priority change event handler
  const HandlePriorityChange = (e) => {
    setPriority(e.target.id);
  };

  if (popUp) {
    PopUpContent = <PopUp TogglePopUp={TogglePopUp} showMap={true} />;
  }
  return (
    <>
      <section id="reportSection" className="report-complaint">
        <h1>Report</h1>
        <form
          action="/"
          onSubmit={(e) => {
            handleSubmitBtn(e);
          }}
        >
          <div className="labelInputWrapper">
            <label>Title</label>
            <input
              type="text"
              onChange={(event) => onInputChange(event)}
              name="title"
              id="title"
              value={reportData.title}
            />
          </div>
          <div className="labelInputWrapper">
            <label>Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={reportData.description}
              onChange={(event) => onInputChange(event)}
              placeholder="please briefly describe the event"
            />
          </div>
          <div className="labelInputWrapper">
            <label htmlFor="img">Upload image:</label>
            <input
              onChange={(e) => {
                handleFileChange(e);
              }}
              type="file"
              id="img"
              name="img"
              accept="image/*"
            ></input>
          </div>
          <div className="labelInputWrapper">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={reportData.name}
              onChange={(e) => onInputChange(e)}
              placeholder="your name"
            />
          </div>
          <div className="labelInputWrapper">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={reportData.phoneNumber}
              onChange={(e) => onInputChange(e)}
              placeholder="000-000-0000"
            />
          </div>
          <div className="LocationWrapper">
            <label>Location</label>
            <a className="LocationBtn" onClick={TogglePopUp}>
              Get Location
            </a>
          </div>
          {PopUpContent}
          <div className="priority-flag-wrapper">
            <label>Priority Flag</label>
            <div className="priority-buttons">
              <button
                className="priority-flag emergency"
                id="0"
                name="priorityEmergency"
                type="button"
                onClick={(e) => {
                  HandlePriorityChange(e);
                }}
              >
                Emergency
              </button>

              <button
                className="priority-flag high"
                id="2"
                name="priorityLow"
                type="button"
                onClick={(e) => {
                  HandlePriorityChange(e);
                }}
              >
                High
              </button>

              <button
                className="priority-flag moderate"
                id="1"
                name="priorityModerate"
                type="button"
                onClick={(e) => {
                  HandlePriorityChange(e);
                }}
              >
                Moderate
              </button>

              {/* <FontAwesomeIcon icon="check-square" /> */}
            </div>
          </div>
          <div className="submit">
            {/* <input type="submit" id='submit-complaint' value="Register Complaint" /> */}
            <button type="submit">Register Complaint</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Report;
