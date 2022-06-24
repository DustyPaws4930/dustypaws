import React from "react";
import GMap from "../Map/GMap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import "./PopUp.css";
const PopUp = (props) => {
  let renderedContent;
  if (props.showMap) {
    renderedContent = (
      <div className="MapWrapper">
        <GMap />
      </div>
    );
  } else if (props.showLogin) {
    renderedContent = <Login />;
  } else if (props.showSignUp) {
    renderedContent = <SignUp />;
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
              {renderedContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
