import React from "react";
import "./PopUp.css";
const PopUp = (props) => {
  return (
    <div>
      <div className="PopUpContainer">
        <div className="OverlayShadow">
          <div className="PopUpContent">
            <div className="closeBtnContainer">
              <button onClick={props.TogglePopUp} className="closePopUpBtn">
                X
              </button>
            </div>
            <h1> this is some Content That you will show some time</h1>
            <p>
              Some more Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quam, a rerum? Quisquam, quidem dolor consequuntur quia
              eveniet consequatur cumque fugiat exercitationem officiis
              voluptatem accusamus, laborum placeat inventore. Labore error
              dolor neque! Tempora dolore voluptates nesciunt nobis ipsam
              aliquam sit dolorem voluptatem, possimus iusto amet repellat
              itaque quia. Ut laborum sapiente molestias optio! Rerum
              reprehenderit a dolor fuga expedita totam, quia distinctio
              similique quisquam ab sint molestiae vitae aut eum recusandae
              perspiciatis. Nobis, distinctio ut! Ratione odit facilis totam,
              sint cumque eos pariatur blanditiis laboriosam porro adipisci ab
              nesciunt suscipit non, sapiente vitae. Molestiae minima quaerat
              obcaecati cumque asperiores. Dolorem, molestias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
