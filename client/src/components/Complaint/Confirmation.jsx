import React from "react";

const Confirmation = (props) => {
  return (
    <div className="confirmation">
      <p>
        <strong>Thank you</strong> for your request we will get back to you
        shortly
      </p>
      <button
        onClick={(e) => {
          props.HandleReportConfirmation(e);
        }}
      >
        Report Case
      </button>
    </div>
  );
};

export default Confirmation;
