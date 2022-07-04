import React, { useState } from "react";
import "./dropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";

const AnimatedDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.initialText);
  // const options = ["Accept", "Completed", "Spam"];
  
  function handleDropDown(event) {
    console.log(`AnimatedDropdown`, event.target.textContent);
    setSelected(event.target.textContent);
    setIsActive(false);
    if(props.onOptionSelect){
      props.onOptionSelect(event.target.textContent)
    }
  }

  return (
    <>
      <div className="Animated-dropdown" id={isActive ? "active" : "disabled"}>
        <div
          className="dropdown-btn" 
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          
        >
          <span>{selected}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
          <div className="dropdown-content" >
            {props.options.map((option, idx) => (
              <div
                key={idx}
                id={idx}
                onClick={handleDropDown}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default AnimatedDropdown;
