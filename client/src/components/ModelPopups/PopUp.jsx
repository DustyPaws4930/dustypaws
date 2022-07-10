import React from "react";
import { useEffect } from "react";
import GMap from "../Map/GMap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import "./PopUp.css";
const PopUp = (props) => {
  let renderedContent;
  if (props.showMap) {
    renderedContent = (
      <div className="MapWrapper">
        <GMap currentCoordinate={props.currentCoordinate} />
      </div>
    );
  } else {
    <div className="SomeContent">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil omnis
        vel voluptas dolores deleniti repudiandae excepturi totam at nemo, eum,
        qui facere. Saepe minima maxime minus incidunt consequatur officia
        nihil.
      </p>
    </div>;
  }

  return (
    <div>
      <div className="PopUpContainer">
        <div className="OverlayShadow">
          <div className="PopUpContent">
            <div className="closeBtnContainer">
              <button onClick={props.TogglePopUp} className="closePopUpBtn">
                X
              </button>
            </div>
            {renderedContent}
            <div className="enter-location-wrapper">
              <button
                className="enter-lacation-btn"
                onClick={props.TogglePopUp}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
