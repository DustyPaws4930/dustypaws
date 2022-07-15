import React, { useState } from "react";
import Moment from "moment";
import EventCalender from "../images/SingleEventDate.png";
import Loaction from "../images/SingleEventLocation.png";
import TicketPrice from "../images/SingleEventTicket.png";
import "./SingleEvent.css";
import axios from "axios";
import { getApiPath, getToken, setToken } from "../../Common";
import { useEffect } from "react";
import WishlistedSingleEvent from '../images/WishlistedSingleEvent.png'



const SingleEvent = (props) => {
  let event = props.eventData;
  let [eventWishlisted, setEventWishlisted] = useState(false);
  let [loggerdInUser, setLoggedInUser] = useState(undefined);

  const WishlistHandler = (eventState) => {
    let wishlistURl = getApiPath() + `user/whishlist/${loggerdInUser._id}`;
    axios
      .patch(wishlistURl, { eventId: event._id, eventState })
      .then((res) => {
        setToken(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(
    (e) => {
      let userToken = getToken();
      if (userToken == null) {
        return;
      } else if (
        userToken !== null &&
        userToken !== "undefined" &&
        userToken !== ""
      ) {
        let user = userToken?.user;
        setLoggedInUser(user);
        let whishlistedEvent = userToken?.user.whistlist;
        for (var i = 0; i < whishlistedEvent.length; i++) {
          if (whishlistedEvent[i] === event._id) {
            setEventWishlisted(true);
          }
        }
      }
    },
    [setLoggedInUser]
  );

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
              <h3 className="eventContentTitle">{event.title}</h3>
              <div className="event-date">
                <img src={EventCalender} alt="" />
                <p>{Moment(event.date).format("ll")}</p>
              </div>
              <div className="event-address">
                <img src={Loaction} alt="" />
                <p>{event.address}</p>
              </div>
              <div className="event-price">
                <img src={TicketPrice} alt="" />
                <p>{event.price}</p>
              </div>
              <p>{event.description}</p>
              <div className="EventControls">
                {console.log(loggerdInUser)}
                {loggerdInUser &&
                loggerdInUser !== "" &&
                loggerdInUser !== undefined &&
                loggerdInUser.role !== "ngo" ? (
                  <div className="EventControls">
                    {eventWishlisted ? 
                    <img src={WishlistedSingleEvent} alt="wishlisted"/>
                    :
                    null
                    }
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setEventWishlisted(!eventWishlisted);
                        WishlistHandler(!eventWishlisted);
                      }}
                    >
                      {eventWishlisted ? "Event Wishlisted" : "Add to Wishlist"}
                    </button>
                    {/* <button>Book Event</button> */}
                  </div>
                ) : (
                  ""
                )}
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
