import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import EventCalender  from "../images/Event_Calender.png";
import Loaction from '../images/location.png'
import TicketPrice from '../images/Ticket.png'
import "./SingleEvent.css";


const SingleEvent = (props) => {
  let event = props.eventData;
  let [eventWishlisted, setEventWishlisted] = useState(false);

  return (
    <div className="PopUpContainer">
      <div className="OverlayShadow">
        <div className="PopUpContent">
          <div className="closeBtnContainer">
            <button onClick={props.TogglePopUp}    className="closePopUpBtn">
              X
            </button>
          </div>
          <div className="EventContentWrapper">
            <div className="EventImageWrapper">
              <img src={event.Image} alt={event.title} />
            </div>
            <div className="ContentWrapper">
              <h1 className="eventContentTitle">{event.title}</h1>
              <div className="event-date">
                <img src={EventCalender} alt="" />
                <p>{Moment(event.date).format("LLLL")}</p>
              </div>
              <div className="event-address">
                <img src={Loaction} alt="" />
                <p>{event.address}</p>
              </div>
              <div className="event-price">
                <img src={TicketPrice} alt="" />
                <p>fetch price</p>
              </div>
              <p>{event.description}</p>
              <div className="EventControls">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEventWishlisted(!eventWishlisted);
                  }}
                >
                  {eventWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </button>
                {/* <button>Book Event</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
