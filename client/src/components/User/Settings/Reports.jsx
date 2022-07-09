import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getApiPath, getLoggedInUser } from "../../../Common";
import { Link } from "react-router-dom";
import ReportIcon from "../../images/Report_Icon_UserSettings.png";

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
      return userComplaints.splice(0, 3).map((complaints, idx) => {
        return (
          <div key={idx} className="caseWrapper">
            <h4>{complaints.title}</h4>
            <button className="ReportIconBtn">
              <img src={ReportIcon} alt={complaints.title} />
            </button>
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
      <div className="CasesContainer">{RenderComplaints()}</div>
      <Link className="ViewAllBtn" to="/allReports">
        View All
      </Link>
    </div>
  );
};

export default Reports;
