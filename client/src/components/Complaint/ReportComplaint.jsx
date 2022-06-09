import React, { useState } from "react";
import PopUp from "../Footer/ModelPopups/PopUp";

const ReportComplaint = props =>{
    
    let [popUp, setPopUp] = useState(false);

    let TogglePopUp = () => {
        setPopUp(!popUp);
    };

    let PopUpContent;
    if (popUp) {
        PopUpContent = <PopUp TogglePopUp={TogglePopUp} />
    }

    return(
        <section className="report-complaint">

            <h2> Save an Animal</h2>
            
            <form action="/report-complaint" method="POST">
                <div>
                    <label htmlFor="title"> title </label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" name="title" id="description" placeholder="please briefly describe the event"/>
                </div>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" placeholder="your name" />
                </div>
                <div>
                    <label htmlFor="location">Location*</label>
                    <button className="location-button" type="button" id="location" onClick={TogglePopUp}>...</button>
                    {/* <a href="" onClick={}></a> */}
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number*</label>
                    <input type="tel" id="contact-number"  />
                </div>
                <div>
                    <label htmlFor="img"> upload images</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div>
                    <label htmlFor="priority">Priority Flag</label>
                    <button className="priority-flag" id="priorityEmergency" type="button">
                        Emergency
                    </button>
                    <button className="priority-flag" id="priorityModerate" type="button">
                        Moderate
                    </button>
                    <button className="priority-flag" id="priorityHigh" type="button">
                        High
                    </button>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>

        </section>
    )

}
export default ReportComplaint