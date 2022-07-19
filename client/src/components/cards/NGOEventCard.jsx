import React from "react";

const NGOEventCard = (props) => {

  console.log(props.result);
  
  return (
    <div key={props.index + 1} className="CardWrapper">
      <div className="card">
        <div className="card-body">
          <div className="card-date">
            <p>{props.result.date}</p>
          </div>
          <img src={props.result.Image} alt={props.result.title} />
          <h2 className="card-title">{props.result.title}</h2>
          <p className="NGO_card-description">{props.result.description}</p>
          <div className="btn-container">
            <a
              className="btn btn-view"
              onClick={(e) => {
                e.preventDefault();
                props.TogglePopUp(props.result);
              }}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NGOEventCard;
