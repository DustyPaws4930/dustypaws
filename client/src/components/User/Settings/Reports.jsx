import React from "react";

const Reports = () => {
  return (
    <div className="userReportContainer">
      <h1>Reported Cases</h1>
      <div className="CasesContainer">
        <div className="caseWrapper">
          <p>Case Title</p>
          <button>Icon Image</button>
        </div>
        <div className="caseWrapper">
          <p>Case Title</p>
          <button>Icon Image</button>
        </div>
        <div className="caseWrapper">
          <p>Case Title</p>
          <button>Icon Image</button>
        </div>

        <button>View All</button>
      </div>
    </div>
  );
};

export default Reports;
