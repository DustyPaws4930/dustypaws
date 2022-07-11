import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiPath, getLoggedInUser } from "../../Common";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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
      return "Emergency";
    } else if (complaintState == 1) {
      return "High";
    } else {
      return "Moderate ";
    }
  };

  const RenderComplaints = () => {
    let loggedInUser = getLoggedInUser();
    if (loggedInUser !== "") {
      return userComplaints.map((complaints, idx) => {
        return (
          <div key={idx} className="caseWrapper">
            <img
              style={{ width: 400 }}
              src={complaints.Image}
              alt={complaints.title}
            />
            <h2>{complaints.title}</h2>
            <p>{complaints.description}</p>
            <p>{RenderState(complaints.priority)}</p>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Header />
      <h1>All Reports</h1>
      {RenderComplaints()}
      <Footer />
    </div>
  );
};

export default AllReports;
