import React from "react";
import wishlistImage from '../../images/WishlistIcon.png'

const Whislist = () => {
  return (
    <div className="wishlistEvents">
      <h3>Wishlisted Events</h3>
      <div className="eventContainer">
        <div className="eventWrapper">
          <p>Event Name</p>
          <img
            src={wishlistImage}
            alt=""
          />
        </div>
        <div className="eventWrapper">
          <p>Event Name</p>
          <img
            src={wishlistImage}
            alt=""
          />
        </div>
        <div className="eventWrapper">
          <p>Event Name</p>
          <img
            src={wishlistImage}
            alt=""
          />
        </div>

       <div className="wish-btn"> <p className="wishlist-btn">View All</p></div>
      </div>
    </div>
  );
};

export default Whislist;
<h1>Reported Cases</h1>;
