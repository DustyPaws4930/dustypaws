import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Donate = (props) => {
  return (
    <div className="donate-page">
      <h2 className="donate-header">Make a Difference by Donating Today</h2>
      <div className="ngo-donate-cards">
        {/* repeated code here */}
        <div className="donate-ngo">
          <h4 className="name"></h4>
          <p className="description"></p>
          <div className="donate-btn-container">
            <button>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
