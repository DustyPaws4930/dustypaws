import React from "react";
import { Link } from "react-router-dom";
// const { event } = location.state

const SingleEvent = () => {
  return (
    <>
      <div>
        <img src="" alt="image1" />
        <img src="" alt="image2" />
      </div>
      <div>
        {/* <h2>{event.title}</h2>
          <p>{event.Date}</p>
          <p>{event.address}</p>
          <p>{event.price}</p>
          <p>{event.description}</p> */}
        <Link to="">
          <button>Edit</button>
        </Link>
        <button>Delete</button>
      </div>
    </>
  );
};

export default SingleEvent;
