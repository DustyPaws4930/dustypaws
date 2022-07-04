import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './About.css'

import profileImage from '../images/AboutUs_profile_Image.png'
import AboutHeroImage from '../images/AboutUs_Hero_Image2.png'
// import { linkedIn } from ''

let About = (props) => {
  return (
    <>
      {/* header component fetched */}
      <header className="header">< Header /></header>

      <main className="about-us">
        <section className="landing-about-us">
          <div className="about-description">
            <img src={AboutHeroImage} alt="" />
           <div className="Our-impact">
              <h1>Our Impact</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis molestias necessitatibus nemo exercitationem repellat magnam ipsam earum a! Doloremque adipisci suscipit voluptatibus eum commodi? Porro at delectus quidem adipisci? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto perferendis officia cum quod. Facere nihil quod sequi tenetur doloremque alias ab vel, provident aliquid nostrum, dolores quam, et excepturi corrupti.</p>
           </div>
          </div>
          <div className="image-container"></div>
        </section>

        <section >
          <div className="team-intro">
            <h3>Meet Our Team</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et facilis magni vero nulla ad error in quam possimus quod molestias similique velit fuga provident id, nesciunt culpa distinctio suscipit.</p>
          </div>
        </section>
        
        <section className="our-team">
          <div className="team-member" id="team-member1">
            <img src={profileImage} alt="AnmolDeep Kaur" />
            <div className="profile-details">
                <div className="member-title">
                  <p>AnmolDeep Kaur</p>
                  <p>Lead UI Designer</p>
                  </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />

                </div>
            </div>
          </div>
          <div className="team-member" id="team-member2">
            <img src={profileImage} alt="Manpreet Kaur" />
            
           <div className="profile-details">
              <div className="member-title">
                  <p>Manpreet Kaur</p>
                  <p>Lead UX Designer</p>
                  </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />
                </div>
              </div>
           </div>

          <div className="team-member" id="team-member5">
            <img src={profileImage} alt="Tejaswini Kalyan" />
            
            <div className="profile-details">
                <div className="member-title">
                    <p>Tejaswini Kalyan Kumar</p>
                    <p>Front End Developer</p>
                  </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />
                </div>
            </div>
          </div>

          <div className="team-member" id="team-member3">
            <img src={profileImage} alt="Shubham Verma" />
            
            <div className="profile-details">
                <div className="member-title">
                  <p>Shubham Verma</p>
                  <p>Full Stack Developer</p>
                </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />
                </div>
            </div>
          </div>
          <div className="team-member" id="team-member4">
            <img src={profileImage} alt="Paraminder Singh" />
            
           <div className="profile-details">
                <div className="member-title">
                  <p>Paraminder Singh</p>
                  <p>Full Stack Developer</p>
                  </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />
                </div>
            </div>
          </div>
          
          <div className="team-member" id="team-member6">
            <img src={profileImage} alt="Jaskaranvir Deogan" />
            <div className="profile-details">
                <div className="member-title">
                  <p>Jaskaranvir Deogan</p>
                  <p>Front End Developer</p>
                </div>
                <div className="social-links">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="linkedin" />

                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />

                  <img src="https://cdn-icons.flaticon.com/png/128/2933/premium/2933347.png?token=exp=1656905000~hmac=f78870f77fa72b3470165c9ec01656e1" alt="globe" />
                </div>
            </div>
          </div>
        </section>
        <section className="connect-email">
          <div className="connect-email-wrapper">
              <p>Open to work part time</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis officia nisi nam rerum neque quisquam eaque eius! Amet, fugiat?</p>
              <div>
                <input type="email" name="email" id="connect-email" placeholder="Enter your email"/>
                <button>Submit</button>
              </div>
          </div>
        </section>
      </main>

      {/* Footer component fetched */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default About;
