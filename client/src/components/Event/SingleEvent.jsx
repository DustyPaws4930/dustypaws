import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "./SingleEvent.css";

const SingleEvent = (props) => {
  let event = props.eventData;
  let [eventWishlisted, setEventWishlisted] = useState(false);

  return (
    <div className="PopUpContainer">
      <div className="OverlayShadow">
        <div className="PopUpContent">
          <div className="closeBtnContainer">
            <button onClick={props.TogglePopUp} className="closePopUpBtn">
              X
            </button>
          </div>
          <div className="EventContentWrapper">
            <div className="EventImageWrapper">
              <img src={event.Image} alt={event.title} />
            </div>
            <div className="ContentWrapper">
              <h1 className="eventContentTitle">{event.title}</h1>
              <p>{Moment(event.date).format("LLLL")}</p>
              <p>{event.address}</p>
              <p>{event.description}</p>
              <div className="EventControls">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEventWishlisted(!eventWishlisted);
                  }}
                >
                  {eventWishlisted ? "Wishlisted" : "Wishlist"}
                </button>
                <button>Book Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
