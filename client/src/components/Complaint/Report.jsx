import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getApiPath, getToken, UploadFile } from "../../Common";
import PopUp from "../ModelPopups/PopUp";
import "./Report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Geocode from "react-geocode";
import PropagateLoader from "react-spinners/PropagateLoader";
let Report = (props) => {
  Geocode.setLanguage("en");
  Geocode.setApiKey("AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw");
  // ***Declare all variables here***
  let [buttonChange, setButtonChange] = useState("");
  let PopUpContent;
  let [popUp, setPopUp] = useState(false);
  let [reportData, setReportData] = useState({
    title: "",
    description: "",
    Image: "",
    name: "",
    priority: 0,
    phoneNumber: "",
    location: {},
    address: "",
    userId: "",
  });
  let [fileName, setFileName] = useState("");

  let [color, setColor] = useState("#ffffff");
  // ***Declare Functions here***F
  useEffect(() => {
    let userToken = getToken();
    if (userToken == null) {
      return;
    } else if (
      userToken !== null &&
      userToken !== "undefined" &&
      userToken !== ""
    ) {
      reportData.userId = userToken?.user._id;
    }
  }, [reportData]);
  const [currentCoordinate, setCurrentCoordinates] = useState({
    lat: "",
    long: "",
  });
  const [currentAddress, setCurrentAddress] = useState("");

  let [loading, setLoading] = useState(false);

  // To show the popup
  const TogglePopUp = () => {
    setPopUp(!popUp);
  };

  const GetLocationNShowPopUp = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentCoordinates({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });

      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          setCurrentAddress(response.results[0].formatted_address);
        },
        (error) => {
          console.error(error);
        }
      );
      TogglePopUp();
    });
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

    reportData.location = currentCoordinate;
    reportData.address = currentAddress;

    console.log(reportData);

    const reportUrl = getApiPath() + "complaint/register";
    axios
      .post(reportUrl, reportData)
      .then(() => {
        toast.success("Complaint registered", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          props.HandleReportConfirmation(e);
        }, 2200);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        console.log(err.response.data.message);
      });
  };

  // File change event handler
  const handleFileChange = async (e) => {
    setFileName(e.target.files[0]?.name);
    setLoading(true);
    console.log(loading);
    UploadFile(e.target.files[0])
      .then((uploadedImage) => {
        setLoading(false);
        console.log(loading);
        reportData.Image = uploadedImage;
      })
      .catch((err) => {
        alert(err);
      });
  };

  // Priority change event handler
  const HandlePriorityChange = (e) => {
    reportData.priority = e.target.id;
    setButtonChange(e.target.innerHTML);
    console.log(e.target.innerHTML);
  };
  const override = {
    display: "block",
    margin: "0 0 0 6rem",
    borderColor: "red",
    backgroundColor: "#deb141",
  };

  if (popUp) {
    PopUpContent = (
      <PopUp
        TogglePopUp={TogglePopUp}
        currentCoordinate={currentCoordinate}
        showMap={true}
      />
    );
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
              required
              onChange={(event) => onInputChange(event)}
              name="title"
              id="title"
              value={reportData.title}
            />
          </div>
          <div className="labelInputWrapper">
            <label>Description</label>
            <textarea
              name="description"
              id="reportDescription"
              value={reportData.description}
              onChange={(event) => onInputChange(event)}
              placeholder="please briefly describe the event"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="labelInputWrapper">
            <label htmlFor="myFile">Upload image:</label>
            <div className="button-div">
              <div className="chooseFileContainer">
                Choose File
                <input
                  type="file"
                  id="myFile"
                  required
                  name="chooseFileBtn"
                  className="fileOriginalBtn"
                  accept="image/*"
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                  aria-hidden="false"
                ></input>
              </div>
              {loading ? (
                <PropagateLoader
                  color="#deb141"
                  loading={loading}
                  cssOverride={override}
                  size={14}
                />
              ) : (
                <label className="imageFileName">{fileName}</label>
              )}
            </div>
          </div>

          <div className="labelInputWrapper">
            <label>Name</label>
            <div className="InputLinkWrapper">
              <input
                type="text"
                required
                name="name"
                id="name"
                maxLength={28}
                value={reportData.name}
                onChange={(e) => onInputChange(e)}
                placeholder="your name"
              />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setReportData({ ...reportData, ["name"]: "Anonymous" });
                }}
              >
                Set Anonymous
              </a>
            </div>
          </div>
          <div className="labelInputWrapper">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              maxLength={10}
              id="phoneNumber"
              value={reportData.phoneNumber}
              onChange={(e) => onInputChange(e)}
              placeholder="000-000-0000"
            />
          </div>
          <div className="LocationWrapper">
            <label>Location :</label>
            <a className="LocationBtn" onClick={GetLocationNShowPopUp}>
              Auto Detect
            </a>
          </div>
          {PopUpContent}
          <div className="priority-flag-wrapper">
            <label>Priority Flag</label>
            <div className="priority-buttons">
              <button
                className={` ${
                  buttonChange === "Emergency"
                    ? "disabled emergency-active"
                    : "priority-flag emergency"
                }`}
                id="0"
                name="priorityEmergency"
                type="button"
                onClick={(e) => {
                  HandlePriorityChange(e);
                }}
              >
                {console.log(buttonChange)}
                Emergency
              </button>

              <button
                className={`${
                  buttonChange == "High"
                    ? "disabled High-active"
                    : "priority-flag high"
                }`}
                id="1"
                name="priorityLow"
                type="button"
                onClick={(e) => {
                  HandlePriorityChange(e);
                }}
              >
                High
              </button>

              <button
                className={`${
                  buttonChange == "Moderate"
                    ? "disabled Moderate-active"
                    : "priority-flag moderate"
                }`}
                id="2"
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
