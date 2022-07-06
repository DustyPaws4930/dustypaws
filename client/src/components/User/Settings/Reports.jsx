import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getApiPath, getLoggedInUser } from "../../../Common";
import { Link } from "react-router-dom";

const Reports = () => {
  const [userComplaints, setUserComplaints] = useState([]);
  useEffect((e) => {
    let loggedInUser = getLoggedInUser();
    if (loggedInUser !== "") {
      const fetchReportUrl =
        getApiPath() + `complaint/getReports/${loggedInUser._id}`;
      axios
        .get(fetchReportUrl)
        .then((res) => {
          setUserComplaints(res.data.complaints);
        })
        .catch((err) => {
          alert("Unable to fetch requested complaints");
          console.log(err);
        });
    }
  }, []);

  const RenderComplaints = () => {
    let loggedInUser = getLoggedInUser();
    if (loggedInUser !== "") {
      return userComplaints.map((complaints, idx) => {
        return (
          <div key={idx} className="caseWrapper">
            <p>{complaints.title}</p>
            <button>Icon Image</button>
          </div>
        );
      });
    } else {
      return (
        <div className="caseWrapper">
          <p>No Complaints Yet.</p>
        </div>
      );
    }
  };

  return (
    <div className="userReportContainer">
      <h3>Reported Cases</h3>
      <div className="CasesContainer">
        {RenderComplaints()}

        <Link to="/allReports">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Reports;
