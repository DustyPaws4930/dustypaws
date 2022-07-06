import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getApiPath, getToken } from "../../../Common";

const Whislist = () => {
  const [whislistedEvents, setWhishlistedEvents] = useState([]);
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
  return (
    <div className="wishlistEvents">
      <h3>Wishlisted Events</h3>
      <div className="eventContainer">
        {whislistedEvents.slice(0, 3).map((whishlistEvent, idx) => {
          return (
            <div className="eventWrapper" key={idx}>
              <p>{whishlistEvent.title}</p>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3870/premium/3870922.png?token=exp=1656292606~hmac=e532c4c424c575976bbc84804db2e8dd"
                alt=""
              />
            </div>
          );
        })}

        <Link to="/whishlistedEvents">View All</Link>
      </div>
    </div>
  );
};

export default Whislist;
<h1>Reported Cases</h1>;
