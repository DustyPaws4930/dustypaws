import React, { useEffect, useState } from "react";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
import CardImages1 from "../project-files/third-box.svg";
import CardImages2 from "../project-files/second-box.svg";
import CardImages3 from "../project-files/first-box.svg";
import reportImage from "../project-files/event-bg-image.svg";
import reportBGImage1 from "../project-files/report-bg-image.png";
import reportBGImage2 from "../project-files/rabbit-report-image.svg";
import reportMobile1 from "../project-files/report-mobile-top.svg";
import reportMobile from "../project-files/report-mobile-bottom.svg";
import Report from "../Complaint/Report";
import PieChart from "../Charts/PieChart";
import Confirmation from "../Complaint/Confirmation";
import { Link } from "react-router-dom";
import axios from "axios";
import { getApiPath } from "../../Common";
import { toast } from "react-toastify";
import { isValidEmail } from "../../Common";
const HomePage = (props) => {
  const [reportCountData, setReportCountData] = useState();

  useEffect(
    (e) => {
      const reportCountUrl = getApiPath() + "data/getReportCount/";
      axios
        .get(reportCountUrl)
        .then((res) => {
          if (res.data.count < 10000) {
            setReportCountData(10000);
          } else {
            setReportCountData(res.data.count);
          }
        })
        .catch((err) => {
          console.log("Error :" + err);
        });
    },
    [setReportCountData]
  );

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
          Most reported animal abuse comes in the form of neglect, with direct
          violence occurring less. Only you can make a difference.
        </h4>
        <div className="reportCaseContainer">
          <a href="#reportSection" id="report-case">
            Report Case
          </a>
        </div>
      </section>
      <section className="statistics">
        <div className="statCount">
          <h3>
            {<AnimatedNumber end={reportCountData} start={0} timer={10} />}
          </h3>
          <h4>Report Count</h4>
        </div>
        <div className="charts">
          <div className="userChart">
            <PieChart />
          </div>
          <h4>Help Count</h4>
        </div>
        <div className="description">
          <p>
            Find a local Non Profit organizations that works for animal welfare
            to donate today. Dusty Paws acts as an interface to redirect user to
            specific NGO’s donation portal.
          </p>
          <Link to="/donate">
            <button id="donate">Donate</button>
          </Link>
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
              To specify how urgently you need Dusty Paws to contact you, use
              the priority function.
            </p>
          </div>
          <div id="card2" className="featurecard">
            <div className="img-container">
              <img src={CardImages2} alt="card2" />
            </div>
            <p>Earn Rewards by reporting situations with precise information</p>
          </div>
          <div id="card3" className="featurecard">
            <div className="img-container">
              <img src={CardImages1} alt="card3" />
            </div>
            <p>
              With only one click, rescue stray animals. For more accurate
              location information, use a real-time location tracker.
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
              pattern=".+@gmail\.com"
              onChange={(e) => {
                setEmailNews(e.target.value);
              }}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              onClick={(e) => {
                if (
                  emailNews !== "" &&
                  emailNews !== undefined &&
                  isValidEmail(emailNews)
                )
                  toast.success("You are subscribed for the newsletters", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                  });
                else {
                  toast.error("Enter the valid email", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                  });
                }
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
