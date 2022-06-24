import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

let About = (props) => {
  return (
    <>
      {/* header component fetched */}
      <header className="header">< Header /></header>

      <main className="about-us">
        <h1>About Us</h1>
        <section className="landing-about-us">
          <div className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis molestias necessitatibus nemo exercitationem repellat magnam ipsam earum a! Doloremque adipisci suscipit voluptatibus eum commodi? Porro at delectus quidem adipisci? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto perferendis officia cum quod. Facere nihil quod sequi tenetur doloremque alias ab vel, provident aliquid nostrum, dolores quam, et excepturi corrupti.
          </div>
          <div className="image-container"></div>
        </section>
        
        <section className="our-team">
          <div className="team-member" id="team-member1">
            <img src="" alt="AnmolDeep Kaur" />
            <p>AnmolDeep Kaur</p>
            <div className="member-title">Lead UI Designer</div>
            <div className="social-links"></div>
          </div>
          <div className="team-member" id="team-member2">
            <img src="" alt="Manpreet Kaur" />
            <p>Manpreet Kaur</p>
            <div className="member-title">Lead UX Designer</div>
            <div className="social-links"></div>
          </div>
          <div className="team-member" id="team-member3">
            <img src="" alt="Shubham Verma" />
            <p>Shubham Verma</p>
            <div className="member-title">Full Stack Developer</div>
            <div className="social-links"></div>
          </div>
          <div className="team-member" id="team-member4">
            <img src="" alt="Paraminder Singh" />
            <p>Paraminder Singh</p>
            <div className="member-title">Full Stack Developer</div>
            <div className="social-links"></div>
          </div>
          <div className="team-member" id="team-member5">
            <img src="" alt="Tejaswini Kalyan" />
            <p>Tejaswini Kalyan</p>
            <div className="member-title">Front End Developer</div>
            <div className="social-links"></div>
          </div>
          <div className="team-member" id="team-member6">
            <img src="" alt="Jaskaranvir Deogan" />
            <p>Jaskaranvir Deogan</p>
            <div className="member-title">Front End Developer</div>
            <div className="social-links"></div>
          </div>
        </section>
        <section className="connect-email">
          <p>Open to work part time</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis officia nisi nam rerum neque quisquam eaque eius! Amet, fugiat?</p>
          <div>
            <input type="email" name="email" id="connect-email" placeholder="Enter your email"/>
            <button>Submit</button>
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
