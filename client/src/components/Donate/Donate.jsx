import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Donate.css";

const Donate = (props) => {
  const [show, setShow] = useState(true);

  const Style = {
    display: "grid",
  };
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main>
        <section className="donate-intro-container">
          <div className="donate-intro">
            <h1>Make a Difference by Donating Today</h1>
            <p>
              Find a local Non Profit organizations that works for animal
              welfare to donate today. Dusty Paws acts as an interface to
              redirect user to specific NGO’s donation portal.
            </p>
          </div>
        </section>

        <section className="donate-card">
          <div className="donate-card-img">
            <div className="donate-card-dark">
              <div className="donate-card-content">
                <h2>People For Animal</h2>
                <p>
                  We are dedicated to help stray animals across India we are
                  providing our services across 20 states.
                </p>
                <div className="card-btn">
                  <a
                    href="https://peopleforanimalsindia.org/donate.php"
                    target="_blank"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="donate-card-img">
            <div className="donate-card-dark">
              <div className="donate-card-content">
                <h2>Sanjay Gandhi Animal Care</h2>
                <p>We save stray animals and also help people to adopt them</p>
                <div className="card-btn">
                  <a
                    href="http://www.sanjaygandhianimalcarecentre.org/payment.asp"
                    target="_blank"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="donate-card-img">
            <div className="donate-card-dark">
              <div className="donate-card-content">
                <h2>PETA India</h2>
                <p>
                  Animals are not for our to experiment wear and entertainment
                  or Abuse
                </p>
                <div className="card-btn">
                  <a href="https://www.petaindia.com/donate/" target="_blank">
                    Donate
                  </a>
                </div>
              </div>
              {/* <div><a>Donate</a></div> */}
            </div>
          </div>

          <div className="donate-card-img">
            <div className="donate-card-dark">
              <div className="donate-card-content">
                <h2>Animal Rahat</h2>
                <p>
                  From helping terrified dogs, cats and wildlife trapped in
                  deep. Open wells to staoping the abuse
                </p>
                <div className="card-btn">
                  <a
                    href="https://support.animalrahat.com/page/17220/donate/1?en_txn7=Navigation::AR-Donate-Now-Main-Top&supporter.appealCode=IXXXWBXXXXJ&_ga=2.66494253.241485109.1655854671-505459502.1655854671"
                    target="_blank"
                  >
                    Donate
                  </a>
                </div>
              </div>
              {/* <div><a>Donate</a></div> */}
            </div>
          </div>
        </section>
        {/* <div className="card-load-more"> */}
        {show ? null : (
          <section className="donate-card1" style={Style}>
            <div className="donate-card-img1">
              <div className="donate-card-dark">
                <div className="donate-card-content">
                  <h2>Animal Rahat</h2>
                  <p>
                    From helping terrified dogs, cats and wildlife trapped in
                    deep. Open wells to staoping the abuse
                  </p>
                  <div className="card-btn">
                    <a
                      href="https://support.animalrahat.com/page/17220/donate/1?en_txn7=Navigation::AR-Donate-Now-Main-Top&supporter.appealCode=IXXXWBXXXXJ&_ga=2.66494253.241485109.1655854671-505459502.1655854671"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="donate-card-img1">
              <div className="donate-card-dark">
                <div className="donate-card-content">
                  <h2>People For Animal</h2>
                  <p>
                    We are dedicated to help stray animals across India we are
                    providing our services across 20 states.
                  </p>
                  <div className="card-btn">
                    <a
                      href="https://peopleforanimalsindia.org/donate.php"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="donate-card-img1">
              <div className="donate-card-dark">
                <div className="donate-card-content">
                  <h2>People For Animal</h2>
                  <p>
                    We are dedicated to help stray animals across India we are
                    providing our services across 20 states.
                  </p>
                  <div className="card-btn">
                    <a
                      href="https://peopleforanimalsindia.org/donate.php"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="donate-card-img1">
              <div className="donate-card-dark">
                <div className="donate-card-content">
                  <h2>People For Animal</h2>
                  <p>
                    We are dedicated to help stray animals across India we are
                    providing our services across 20 states.
                  </p>
                  <div className="card-btn">
                    <a
                      href="https://peopleforanimalsindia.org/donate.php"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {show ? (
          <div className="card-load-more" onClick={() => setShow(false)}>
            <button>Load More</button>
          </div>
        ) : null}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default Donate;
