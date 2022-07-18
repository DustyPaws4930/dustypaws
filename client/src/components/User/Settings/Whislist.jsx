import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getApiPath, getToken } from "../../../Common";
import WhishlistIcon from "../../images/WishlistIcon.png";
const Whislist = () => {
  const [whislistedEvents, setWhishlistedEvents] = useState([]);
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== "undefined" && userToken !== "") {
      for (let index = 0; index < userToken.user.whistlist.length; index++) {
        let eventURl =
          getApiPath() + `event/getById/${userToken.user.whistlist[index]}`;
        axios.get(eventURl).then((res) => {
          setWhishlistedEvents((whislistedEvents) => [
            ...whislistedEvents,
            res.data,
          ]);
        });
      }
    }
  }, [setWhishlistedEvents]);

  return (
    <div className="wishlistEvents">
      <h3>Wishlisted Events</h3>
      <div className="eventContainer">
        {whislistedEvents.length > 0 ? (
          whislistedEvents.splice(0, 4).map((whishlistEvent, idx) => {
            return (
              <div className="eventWrapper" key={idx}>
                <p>{whishlistEvent.title}</p>
                <img src={WhishlistIcon} alt={whishlistEvent.title} />
              </div>
            );
          })
        ) : (
          <>
            <div className="caseWrapper">
              <p>No Events To display.</p>
            </div>
          </>
        )}
      </div>

      <Link className="ViewAllBtn" to="/whishlistedEvents">
        View Events
      </Link>
    </div>
  );
};

export default Whislist;
<h1>Reported Cases</h1>;
