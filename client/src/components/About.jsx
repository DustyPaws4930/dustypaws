import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

let About = () => {
  return (
    <>
      {/* header component fetched */}
      <header className="header">< Header /></header>

      <div className="about-us">
        <h1>About Us</h1>
        <section className="landing-about-us">
          <div className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis molestias necessitatibus nemo exercitationem repellat magnam ipsam earum a! Doloremque adipisci suscipit voluptatibus eum commodi? Porro at delectus quidem adipisci? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto perferendis officia cum quod. Facere nihil quod sequi tenetur doloremque alias ab vel, provident aliquid nostrum, dolores quam, et excepturi corrupti.
          </div>
          <div className="image-container"></div>
        </section>
        <section className="about-stats">
          <div className="sub-section-1">
              <div className="heading1">Heading 1</div>
              <div className="heading2"> Heading 2</div>
          </div>
          <div className="sub-section-1">
              <h3>Our Impact</h3>
              <div className="graph-area">Graph area</div>
              <div className="graph-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet libero explicabo tempore labore aliquam nemo reprehenderit praesentium fuga cumque?
              </div>
          </div>
        </section>
        <section className="our-team">
          <div className="team-member" id="team-member1">
            <img src="" alt="AnmolDeep Kaur" />
            <p>AnmolDeep Kaur</p>
          </div>
          <div className="team-member" id="team-member2">
            <img src="" alt="Manpreet Kaur" />
            <p>Manpreet Kaur</p>
          </div>
          <div className="team-member" id="team-member3">
            <img src="" alt="Shubham Verma" />
            <p>Shubham Verma</p>
          </div>
          <div className="team-member" id="team-member4">
            <img src="" alt="Paraminder Singh" />
            <p>Paraminder Singh</p>
          </div>
          <div className="team-member" id="team-member5">
            <img src="" alt="Tejaswini Kalyan" />
            <p>Tejaswini Kalyan</p>
          </div>
          <div className="team-member" id="team-member6">
            <img src="" alt="Jaskaranvir Deogan" />
            <p>Jaskaranvir Deogan</p>
          </div>
        </section>
      </div>

      {/* Footer component fetched */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default About;
