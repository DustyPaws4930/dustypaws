import React, { useState } from "react";
import Moment from "moment";
import "./SingleEvent.css";
import axios from "axios";
import { getApiPath, getToken, setToken } from "../../Common";
import { useEffect } from "react";

const SingleEvent = (props) => {
  let event = props.eventData;
  let [eventWishlisted, setEventWishlisted] = useState(false);
  let [loggerdInUserId, setLoggedInUserId] = useState("");

  const WishlistHandler = (eventState) => {
    let wishlistURl = getApiPath() + `user/whishlist/${loggerdInUserId}`;
    console.log(eventState);
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
        let id = userToken?.user._id;
        setLoggedInUserId(id);
        let whishlistedEvent = userToken?.user.whistlist;
        for (var i = 0; i < whishlistedEvent.length; i++) {
          if (whishlistedEvent[i] === event._id) {
            setEventWishlisted(true);
          }
        }
      }
    },
    [loggerdInUserId]
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
              <h1 className="eventContentTitle">{event.title}</h1>
              <p>{Moment(event.date).format("LLLL")}</p>
              <p>{event.address}</p>
              <p>{event.description}</p>
              <div className="EventControls">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEventWishlisted(!eventWishlisted);
                    WishlistHandler(!eventWishlisted);
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
