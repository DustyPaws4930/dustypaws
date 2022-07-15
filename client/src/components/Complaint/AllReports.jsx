import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiPath, getLoggedInUser } from "../../Common";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AllReport.css";

const AllReports = () => {
  const [userComplaints, setUserComplaints] = useState([]);
  useEffect((e) => {
    let loggedInUser = getLoggedInUser();
    if (loggedInUser !== "") {
      const fetchReportUrl =
        getApiPath() + `complaint/getReports/${loggedInUser._id}`;
      axios
        .get(fetchReportUrl)
        .then((res) => {
          console.log(res.data.complaints);
          setUserComplaints(res.data.complaints);
        })
        .catch((err) => {
          alert("Unable to fetch requested complaints");
          console.log(err);
        });
    }
  }, []);

  const RenderState = (complaintState) => {
    if (complaintState == 0) {
      return "show-flag Emergency";
    } else if (complaintState == 1) {
      return "show-flag High";
    } else {
      return "show-flag Moderate ";
    }
  };

  const RenderComplaints = () => {
    let loggedInUser = getLoggedInUser();
    if (loggedInUser !== "") {
      return userComplaints.map((complaints, idx) => {
        return (
          <div key={idx} className="caseWrapper">
            <img
              src={complaints.Image}
              alt={complaints.title}
              className="complaints-image"
            />
            <h2>{complaints.title}</h2>
            <p className="card-address">{complaints.address}</p>
            <p>{complaints.description}</p>
            <p>Status: {complaints.state}</p>
            <p className={RenderState(complaints.priority)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M16.363 34.58L2.46922 20.6862C1.23422 19.4512 1.23422 17.5216 2.46922 16.2866L16.363 2.3928C17.598 1.1578 19.5277 1.1578 20.7627 2.3928L34.6564 16.2866C35.8914 17.5216 35.8914 19.4512 34.6564 20.6862L20.7627 34.58C19.5277 35.815 17.5208 35.815 16.363 34.58Z"
                  fill="#F44336"
                />
                <path
                  d="M16.6719 25.2404C16.6719 25.0088 16.7491 24.7772 16.8262 24.5457C16.9034 24.3141 17.0578 24.1597 17.2122 24.0054C17.3666 23.851 17.5981 23.6966 17.8297 23.6194C18.0613 23.5422 18.2928 23.465 18.6016 23.465C18.9103 23.465 19.1419 23.5422 19.3734 23.6194C19.605 23.6966 19.8366 23.851 19.9909 24.0054C20.1453 24.1597 20.2997 24.3141 20.3769 24.5457C20.4541 24.7772 20.5313 25.0088 20.5313 25.2404C20.5313 25.4719 20.4541 25.7035 20.3769 25.935C20.2997 26.1666 20.1453 26.321 19.9909 26.4754C19.8366 26.6297 19.605 26.7841 19.3734 26.8613C19.1419 26.9385 18.9103 27.0157 18.6016 27.0157C18.2928 27.0157 18.0613 26.9385 17.8297 26.8613C17.5981 26.7841 17.4437 26.6297 17.2122 26.4754C17.0578 26.321 16.9034 26.1666 16.8262 25.935C16.7491 25.7035 16.6719 25.5491 16.6719 25.2404ZM19.9137 21.6897H17.135L16.7491 10.0344H20.2997L19.9137 21.6897V21.6897Z"
                  fill="white"
                />
              </svg>
            </p>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="AllReports">
        <h1>All Reports</h1>
        {RenderComplaints()}
      </div>
      <Footer />
    </div>
  );
};

export default AllReports;
