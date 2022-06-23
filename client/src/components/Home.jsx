import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import { getToken } from "../Common";
import jwt from "jwt-decode";
import Footer from "./Footer/Footer";
import Report from "./Complaint/Report";
import "../index.css";
import "./home.css";
import CardImages1 from './project-files/13.png'
import CardImages2 from './project-files/1 6.png'
import CardImages3 from './project-files/15.png'
import reportImage from './project-files/report-form-img.png'
import reportBGImage1 from './project-files/report-bg-image.png'
import reportBGImage2 from './project-files/report-bg-image2.png'
import reportMobile1 from './project-files/form-mobile-image.png'
import reportMobile from './project-files/form-mobile-image1.png'

// import WarningIcon from '@fortawesome/free-solid-svg-icons';

const User = createContext();
const Home = () => {
  // In order to send any fetch request or any request we will send the request.header
  // In that we will pass token and if authorized token: Proceed else Not authorized

  // Sample request Function

  // const postdata = () => {

  // axios.post(
  //   "some url",
  //   // { body: json },
  //   { headers: { "x-access-token": `${token}` } }
  // );

  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    let userToken = getToken();
    if (userToken !== null && userToken !== undefined && userToken !== "");
    setLoggedInUser(userToken.user);
  }, [setLoggedInUser]);

  return (
    <div className="Home">
      {/* <h1>Home page</h1> */}
      <User.Provider value={loggedInUser}>
        <Header />
        <section className="landing">
          <h4 className="landing-text">
          Our responsive web applications make it easier for people and non-governmental organizations (NGOs) who wants to.
          </h4>
          <button id='report-case'>Report Case</button>
        </section>
        <section className="statistics">
          <div className="charts"></div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla ex labore et similique corporis!</p>
            <button id="donate">Donate</button>
          </div>
        </section>
        <section className="features">
          
          <div className="feature-subsection1">
            <h2>Our Featuers</h2>
            <div id="card1" className="featurecard">
              <div className="img-container">
                <img src={CardImages3} alt="img1" />
              </div>
              <p>
              Register Complaints accoring to there Priority of assistance required
              </p>
            </div>
            <div id="card2" className="featurecard">
              <div className="img-container">
                <img src={CardImages2} alt="img2" />
              </div>
              <p>
              Earn Rewards and get recognized on basis of information provided by the user. 
              </p>
            </div>
            <div id="card3" className="featurecard">
                <div className="img-container">
                  <img src={CardImages1} alt="img2" />
                </div>
                <p>
                Earn Rewards and get recognized on basis of information provided by the user. 
                </p>
            </div>
          </div>
          <div className="feature-subsection2">
            <h4>Why&nbsp;We?</h4>
          </div>
          <div className="circle" id="circle1"></div>
          <div className="circle" id="circle2"></div>
          <div className="circle" id="circle3"></div>
          <div className="circle" id="circle4"></div>
          <div className="circle" id="circle5"></div>
          <div className="circle" id="circle6"></div>
          <div className="circle" id="circle7"></div>
          <div className="circles">
            
          </div>
        </section>
        <section className="report-wrapper">
        <img src={reportMobile} alt=" report image" className="report-mobile2" />
          <Report/>
          <section className="report-images">
           <img src={reportImage} alt="report image" className="report-image3" />
          </section>
          <img src={reportBGImage1} alt=" report image" className="report-image1" />
          <img src={reportBGImage2} alt=" report image" className="report-image2" />
          <img src={reportMobile1} alt=" report image" className="report-mobile1" />
          <img src={reportMobile} alt=" report image" className="report-mobile2" />
          
        </section>
        <section className="newsletter">
          <div className="newsletter-wrapper">
            <h4>Join Our Newsletter</h4>
            <p>Keep yourself updated with latest event and affairs. Subscribe our news letter by providing your  </p>
            <div>
              <input type="email" name="newsletter-email" id="newsletterEmail" placeholder="Enter your email"/>
              <button type="submit">Submit</button>
            </div>
          </div>
        </section>
        <Footer />
      </User.Provider>
    </div>
  );
};

export default Home;
export { User };
