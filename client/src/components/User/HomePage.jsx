import React, { useState } from "react";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
import CardImages1 from "../project-files/third-box.svg";
import CardImages2 from "../project-files/second-box.svg";
import CardImages3 from "../project-files/first-box.svg";
import reportImage from "../project-files/event-bg-image.svg";
import reportBGImage1 from "../project-files/report-bg-image.png";
import reportBGImage2 from "../project-files/rabbit-report-image.svg";
import reportMobile1 from "../project-files/report-mobile-top.svg";
import reportMobile from "../project-files/report-mobile-bottom.svg";
import figPie from "../project-files/Figpie.png";
import Report from "../Complaint/Report";
import PieChart from "../Charts/PieChart";
import UserData from "../../Data";
import Confirmation from "../Complaint/Confirmation";
const HomePage = (props) => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Rewards",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#285b53", "#deb141", "#ff3333"],
        borderColor: "#ddd",
        borderWidth: 2,
      },
    ],
  });

  const [showReportForm, setShowReportForm] = useState(true);
  let [emailNews, setEmailNews] = useState("");
  let HandleReportConfirmation = (e) => {
    e.preventDefault();
    setShowReportForm(!showReportForm);
  };

  return (
    <div className="Home">
      <section className="landing">
        <h4 className="landing-text">
          Our responsive web applications make it easier for people and
          non-governmental organizations (NGOs) who wants to.
        </h4>
        <div className="reportCaseContainer">
          <a href="#reportSection" id="report-case">
            Report Case
          </a>
        </div>
      </section>
      <section className="statistics">
        <div className="statCount">
          <h3>{<AnimatedNumber end={100000} start={0} timer={10} />}</h3>
          <h4>Donation Count</h4>
        </div>
        <div className="charts">
          <div className="userChart" style={{ width: 400 }}>
            <PieChart chartData={userData} />
          </div>
          <h4>Help Count</h4>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla
            ex labore et similique corporis! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet quaerat, accusamus molestiae
            alias ab aspernatur magni dolor sit ut qui!
          </p>
          <p className="btn-donate"><button id="donate">Donate</button></p>
        </div>
      </section>
      <section className="features">
        <div className="feature-subsection1">
          <h2>Our Featuers</h2>
          <div id="card1" className="featurecard">
            <div className="img-container">
              <img src={CardImages3} alt="card1" />
            </div>
            <p>
              Register Complaints accoring to there Priority of assistance
              required
            </p>
          </div>
          <div id="card2" className="featurecard">
            <div className="img-container">
              <img src={CardImages2} alt="card2" />
            </div>
            <p>
              Earn Rewards and get recognized on basis of information provided
              by the user.
            </p>
          </div>
          <div id="card3" className="featurecard">
            <div className="img-container">
              <img src={CardImages1} alt="card3" />
            </div>
            <p>
              Earn Rewards and get recognized on basis of information provided
              by the user.
            </p>
          </div>
        </div>
        <div className="feature-subsection2">
          <h4>Why&nbsp;Us?</h4>
        </div>
        <div className="circle" id="circle1"></div>
        <div className="circle" id="circle2"></div>
        <div className="circle" id="circle3"></div>
        <div className="circle" id="circle4"></div>
        <div className="circle" id="circle5"></div>
        <div className="circle" id="circle6"></div>
        <div className="circle" id="circle7"></div>
      </section>
      <section className="report-wrapper">
      <img src={reportMobile1} alt=" report3" className="report-mobile1" />
        <>
          {showReportForm ? (
            <Report HandleReportConfirmation={HandleReportConfirmation} />
          ) : (
            <Confirmation HandleReportConfirmation={HandleReportConfirmation} />
          )}
        </>
        <section className="report-images">
          <img src={reportImage} alt="report" className="report-image3" />
        </section>
        <img src={reportBGImage1} alt=" report1" className="report-image1" />
        <img src={reportBGImage2} alt=" report2" className="report-image2" />
        
        <img src={reportMobile} alt=" report4" className="report-mobile2" />
      </section>
      <section className="newsletter">
        <div className="newsletter-wrapper">
          <h4>Join Our Newsletter</h4>
          <p>
            Keep yourself updated with latest event and affairs. Subscribe our
            news letter by providing your
          </p>
          <div>
            <input
              type="email"
              name="newsletter-email"
              id="newsletterEmail"
              value={emailNews}
              onChange={(e) => {
                setEmailNews(e.target.value);
              }}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              onClick={(e) => {
                alert("You are subscribed for the news letter");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
