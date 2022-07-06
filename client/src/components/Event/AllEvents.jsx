import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiPath, getToken } from "../../Common";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SingleEvent from "./SingleEvent";
const AllEvents = () => {
  let [whislistedEvents, setWhishlistedEvents] = useState([]);
  let [selectedEvent, setSelectedEvent] = useState({});

  let [popUp, setPopUp] = useState(false);
  let PopUpContent = "";
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== "undefined" && userToken !== "") {
      for (let index = 0; index < userToken.user.whistlist.length; index++) {
        let eventURl =
          getApiPath() + `event/getById/${userToken.user.whistlist[index]}`;
        axios.get(eventURl).then((res) => {
          setWhishlistedEvents(whislistedEvents.concat(res.data));
        });
      }
    }
  }, [setWhishlistedEvents]);

  const TogglePopUp = () => {
    setPopUp(!popUp);
  };

  if (popUp) {
    PopUpContent = (
      <SingleEvent TogglePopUp={TogglePopUp} eventData={selectedEvent} />
    );
  }

  return (
    <div>
      <Header />
      <h1>Whishlisted Events</h1>
      <div className="AllEventsWrapper">
        {whislistedEvents.map((whishlistEvent, idx) => {
          return (
            <div className="eventWrapper" key={idx}>
              <img src={whishlistEvent.Image} alt={whishlistEvent.title} />
              <h2>{whishlistEvent.title}</h2>
              <p>{whishlistEvent.description}</p>
              <div className="btn-eventt-details">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedEvent(whishlistEvent);
                    TogglePopUp();
                  }}
                >
                  Event Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {PopUpContent}
      <Footer />
    </div>
  );
};

export default AllEvents;
