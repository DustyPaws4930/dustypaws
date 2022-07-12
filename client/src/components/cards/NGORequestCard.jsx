import React, { useEffect, useState } from "react";
// import "./pagination.css";

import AnimatedDropdown from "../dropdown/AnimatedDropdown";

const NGORequestCard = (props) => {
  const HandleComplaintDropDown = (option, reportId) => {
    props.HandleComplaintDropDown(option, reportId);
  };

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

        {console.log(props.result.title + " " + props.result.state)}
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
        </div>
      </div>
    </>
  );
};

export default NGORequestCard;
