import React from "react";
import DefaultImage from "../project-files/default-image.svg";
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
              objectFit: "contain",
              height: 100,
              width: 150,
            }}
            src={props.result.Image ? props.result.Image : DefaultImage}
            alt={props.result.title}
          />
        </div>
        <h4>{props.result.title}</h4>
        <p>{props.result.address}</p>

        <p>{props.result.description}</p>
        <div className="status-dropdown">
          {/* {props.initialText} */}
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
          <p>
            <strong>Reported:</strong> {timeAgo}
          </p>
        </div>
      </div>
    </>
  );
};

export default NGORequestCard;
