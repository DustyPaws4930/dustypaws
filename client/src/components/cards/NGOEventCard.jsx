import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NGOEventCard = (props) => {
  return(
    <div key={props.index +1} className="CardWrapper">
      <div className="card">
        <div className="card-body">
          <div className="card-date">
            <p>{props.result.date}</p>
          </div>
          <img src={props.result.Image} alt={props.result.title} />
          <h2 className="card-title">{props.result.title}</h2>
          <p className="card-description">{props.result.description}</p>
          <Link to="/singleEvent">
            <button>View More...</button>
          </Link>
          <i className="fa fa-heart-o"></i>
          <img src="" alt="dustbin" />
          <Link to="/eventEdit">
            <img src="" alt="edit" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NGOEventCard;
