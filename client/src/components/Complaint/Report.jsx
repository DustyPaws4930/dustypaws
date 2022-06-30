import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getApiPath, getToken } from "../../Common";
import PopUp from "../ModelPopups/PopUp";
import "./Report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

let Report = (props) => {
  // ***Declare all variables here***
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
    userId: "",
  });

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

      TogglePopUp();
      console.log(currentCoordinate);
    });
  };

  // All input change event handler
  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReportData({ ...reportData, [name]: value });
  };

  const UploadFile = async (file) => {
    try {
      const credentials = {
        accessKeyId: "AKIAXGG575DZRYM2U7X5",
        secretAccessKey: "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",
      };
      const parallelUploads3 = new Upload({
        client:
          new S3({ region: "us-east-1", credentials: credentials }) ||
          new S3Client({ region: "us-east-1", credentials: credentials }),
        params: {
          Bucket: "dustypaws-storage-bucket",
          Key: file.name,
          Body: file,
        },

        tags: [
          /*...*/
        ], // optional tags
        queueSize: 4, // optional concurrency configuration
        partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
        leavePartsOnError: false, // optional manually handle dropped parts
      });

      parallelUploads3.on("httpUploadProgress", (progress) => {
        // console.log(progress);
      });

      let data = await parallelUploads3.done();
      return data.Location;
    } catch (e) {
      alert("Error occured, cannot upload image.");
      console.log(e);
    }
  };

  // form submit event handler
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    reportData.location = currentCoordinate;
    console.log(reportData);

    const reportUrl = getApiPath() + "complaint/register";
    axios
      .post(reportUrl, reportData)
      .then((res) => {
        alert("Complaint registered");
      })
      .catch((err) => {
        console.log("Error" + err.response.data);
        alert("Error: " + err.response.data);
      });
  };

  // File change event handler
  const handleFileChange = async (e) => {
    UploadFile(e.target.files[0]).then((uploadedImage) => {
      console.log(typeof uploadedImage);
      reportData.Image = uploadedImage;
    });
  };

  // Priority change event handler
  const HandlePriorityChange = (e) => {
    reportData.priority = e.target.id;
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
