import React from "react";
// import "./pagination.css";

import AnimatedDropdown from "../dropdown/AnimatedDropdown";

const NGORequestCard = (props) => {
  const HandleComplaintDropDown = (option, reportId) => {
    props.HandleComplaintDropDown(option, reportId);
  };
  let Difference_In_Time =
    new Date().getTime() - new Date(props.result.reportDate).getTime();
  let timeAgo;
  if (Difference_In_Time / (1000 * 60) < 60) {
    timeAgo = Math.trunc(Difference_In_Time / (1000 * 60)) + " mins ago";
  } else if (Difference_In_Time / (1000 * 3600) < 24) {
    timeAgo = Math.trunc(Difference_In_Time / (1000 * 3600)) + " hours ago";
  } else if (Difference_In_Time / (1000 * 3600 * 24) < 31) {
    timeAgo = Math.trunc(Difference_In_Time / (1000 * 3600 * 24)) + " days ago";
  }
  return (
    <>
      <div
        key={props.index}
        className="cardWrapper"
        id={
          props.result.state === "Completed" || props.result.state === "Spam"
            ? "setCompleted"
            : ""
        }
        onClick={(e) => {
          props.ShowOnMap(e, props.result.location);
        }}
      >
        <div className="imageWrapper">
          <img
            style={{
              resizeMode: "stretch",
              height: 100,
              width: 200,
            }}
            src={props.result.Image}
            alt={props.result.title}
          />
        </div>
        <h4>{props.result.title}</h4>
        <p>{props.result.address}</p>

        <p>{props.result.description}</p>
        {console.log(props.result.state)}
        <div className="status-dropdown">
          <AnimatedDropdown
            options={props.options}
            HandleComplaintDropDown={HandleComplaintDropDown}
            reportId={props.result._id}
            initialText={
              props.result.state === "Submitted"
                ? props.initialText
                : props.result.state
            }
          />
          <p>{timeAgo}</p>
        </div>
      </div>
    </>
  );
};

export default NGORequestCard;
