import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import reportBGImage2 from "../project-files/rabbit-report-image.svg";

import "./About.css";

import AboutHeroImage from "../images/AboutUs_Hero_Image2.png";
import AboutUsGlobe from "../images/AboutUs_globe.png";
import AboutUsLinkdin from "../images/AboutUS_linkedin.png";
import AboutUsGithub from "../images/AboutUs_github.png";

import Anmol from "../images/Anmol.png";
import Manpreet from "../images/Manpreet.png";
import Tejaswini from "../images/Tejaswini.png";
import Shubham from "../images/Shubham.png";
import Jaskaran from "../images/Jaskaran.png";
import Param from "../images/Param.png";

import Behance from "../images/Behance.png";
import Newsletter from "../Newsletter";

let About = (props) => {
  return (
    <>
      {/* header component fetched */}
      <header className="header">
        <Header />
      </header>

      <main className="about-us">
        <section className="landing-about-us">
          <div className="about-description">
            <img src={AboutHeroImage} alt="" />
            <div className="Our-impact">
              <h1>Our Impact</h1>
              <p>
                Our responsive web applications make it easier for people and
                non-governmental organizations (NGOs) who wants to help stray
                animals by minimizing the hassle to find person to contact for
                assistance and provide better living conditions to animals along
                with rewards for users who provides information Unlike other
                activist sites for animal help.
              </p>
              {/* <a href="images/Proposal_Draft.pdf"><button>Project Proposal</button></a> */}
            </div>
          </div>
          <div className="image-container"></div>
        </section>

        <section>
          <div className="team-intro">
            <h3>Meet Our Team</h3>
            <p>
              Our team consists of 6 members from India, and their backgrounds
              range from graphic design to UX/UI design to full-stack
              programming. As a team, we strive to use technology not just to
              answer daily issues but also to improve society through our
              products and raise social consciousness.
            </p>
          </div>
        </section>

        <section className="our-team">
          <div className="team-member" id="team-member1">
            <img src={Anmol} alt="AnmolDeep Kaur" />
            <div className="profile-details" id="profile1">
              <div className="member-title">
                <p>AnmolDeep Kaur</p>
                <p>Lead UI Designer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/anmoldeep-kaur-b6b938211/">
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>
                {/* <p>https://www.linkedin.com/in/anmoldeep-kaur-b6b938211/</p> */}
                <img src={Behance} alt="Behance profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>
          <div className="team-member" id="team-member2">
            <img src={Manpreet} alt="Manpreet Kaur" />

            <div className="profile-details" id="profile2">
              <div className="member-title">
                <p>Manpreet Kaur</p>
                <p>Lead UX Designer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/manpreet-kaur-52b935211">
                  {" "}
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>
                {/* <p>https://www.linkedin.com/in/manpreet-kaur-52b935211/</p> */}
                <a href="https://www.behance.net/manpreetkaur121">
                  <img src={Behance} alt="Behance profile" />
                </a>

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member3">
            <img src={Tejaswini} alt="Tejaswini Kalyan" />

            <div className="profile-details" id="profile3">
              <div className="member-title">
                <p>Tejaswini Kalyan Kumar</p>
                <p>Front End Developer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/tejaswini-kalyan-465287212/">
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>
                {/* <p>www.linkedin.com/in/tejaswini-mysore-kalyan-kumar-465287212</p> */}
                <a href="https://github.com/123-Teju">
                  <img src={AboutUsGithub} alt="github profile" />
                </a>
                {/* https://github.com/123-Teju */}
                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member4">
            <img src={Jaskaran} alt="Jaskaranvir Deogan" />
            <div className="profile-details" id="profile6">
              <div className="member-title">
                <p>Jaskaranvir Deogan</p>
                <p>Front End Developer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/jaskaranvir-deogan-55a134171/">
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>
                {/* <p>https://www.linkedin.com/in/jaskaranvir-deogan-55a134171/</p> */}
                <a href="https://github.com/jaskarandeogan">
                  <img src={AboutUsGithub} alt="github profile" />
                </a>
                {/* https://github.com/jaskarandeogan */}
                <a href="https://jasdeogan.com/">
                  <img src={AboutUsGlobe} alt="globe" />
                </a>
                {/* https://jasdeogan.com/ */}
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member5">
            <img src={Shubham} alt="Shubham Verma" />

            <div className="profile-details" id="profile5">
              <div className="member-title">
                <p>Shubham Verma</p>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shubham-verma-2482b0137/">
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>
                {/* <p>https://www.linkedin.com/in/shubham-verma-2482b0137/</p> */}
                <a href="https://github.com/SVerma799">
                  <img src={AboutUsGithub} alt="github profile" />
                </a>

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member6">
            <img src={Param} alt="Paraminder Singh" />

            <div className="profile-details" id="profile6">
              <div className="member-title">
                <p>Paraminder Singh</p>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/parminder-singh-ab5651113">
                  <img src={AboutUsLinkdin} alt="linkedin" />
                </a>

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>
        </section>
        <section className="BunnyImageWrapper">
          <img src={reportBGImage2} alt=" report2" className="BunnyImage" />
        </section>
        <Newsletter />
      </main>

      {/* Footer component fetched */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default About;
