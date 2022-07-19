// import React, { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react';
import './Event.css';
// import Header from '../Header/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer.jsx';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../Header/Header';
import Event_Page_Card_Dog from '../images/Event_Page_Card_Dog.jpg';
import axios from 'axios';
// import WishlistIcon from "../images/WishlistIcon.png";
import EventCalenderImg from '../images/Event_Calender.png';
import { getApiPath } from '../../Common';
import SingleEvent from './SingleEvent';
import DaysToGoIcon from '../images/Days_ToGo.png';
import Paws from '../project-files/paws.svg';
import Paws2 from '../project-files/paws2.svg';

const Event = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const [owlState, setOwlState] = useState({
    responsive: {
      0: {
        items: 1,
        center: 'true',
      },
      450: {
        items: 2,
      },
      768: {
        items: 3,
        marginleft: '10px',
        marginRight: '10px',
        center: true,
      },
      1000: {
        items: 5,
        marginleft: '100px',
        marginRight: '100px',
        center: true,
      },
    },
  });

  // const owl = {
  //   1000: {
  //     items: 5,
  //     // margin: "0px",
  //     marginleft: "100px",
  //     marginRight: "100px",
  //     center: true,
  //   },
  //   768: {
  //     items: 3,
  //     marginleft: "100px",
  //     marginRight: "100px",
  //     center: true,
  //   },
  //   480: {
  //     items: 3,
  //     marginleft: "10px",
  //     marginRight: "10px",
  //     center: true,
  //   },
  //   0: {
  //     items: 1,
  //     marginleft: "auto",
  //     marginRight: "auto",
  //     center: true,
  //   },
  // };

  const [recentEvents, setRecentEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  let [popUp, setPopUp] = useState(false);
  let [selectedEvent, setSelectedEvent] = useState({});
  // let [loggedInEvent, setLoggedInUser] = useState({});

  // let userWhishlistedEvents = [];
  let PopUpContent = '';
  useEffect(function getAllEvents() {
    let eventURL = getApiPath() + 'event/fetchAll';

    // Get All Events
    axios
      .get(eventURL)
      .then((result) => {
        let newDate = new Date();
        newDate.setMonth(new Date().getMonth() - 1);

        let recntData = result.data.filter((obj) => {
          return (
            new Date(obj.date) >= newDate && new Date(obj.date) < new Date()
          );
        });

        // Get Upcoming Event
        newDate.setMonth(new Date().getMonth() + 1);

        let upcoingData = result.data.filter((obj) => {
          return new Date(obj.date) > new Date();
        });

        // Set recent Events
        setRecentEvents(recntData);

        // Set Upcoming Events
        setUpcomingEvents(upcoingData);
      })
      .catch((error) => console.log(error));
  }, []);

  const TogglePopUp = () => {
    setPopUp(!popUp);
  };

  if (popUp) {
    PopUpContent = (
      <SingleEvent TogglePopUp={TogglePopUp} eventData={selectedEvent} />
    );
  }

  return (
    <>
      <Header />
      <div className="featured-event">
        <div>
          <div className="featured-event-heading">
            <h2>Featured Event</h2>
          </div>
          <div className="Event-Mobile">
            <div className="featured-event-date">
              <img id="CalenderIcon" src={DaysToGoIcon} alt="" />
              <p>Days to go</p>
            </div>
            <div className="featured-event-description">
              <h4>Awareness Drive for stray animals</h4>
              <p>
                This adage certainly rings true for the person who decides to
                take the stray dog into their heart and home, as the love and
                loyalty of a four-legged friend enriches a person’s life
                immeasurably.
              </p>
              <div className="btn-feature-event">
                <a
                  href="https://www.dogtipper.com/blog/2021/04/world-stray-animals-day-2.html"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-event-img">
          {/* <img src="https://images.unsplash.com/photo-1592769606534-fe78d27bf450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="featured Event" /> */}
        </div>
      </div>

      <hr />

      {/* RECENT EVENTS */}
      <div className="recent-event-wrapper">
        <div className="foot-prints">
          <img src={Paws} alt="paws" />
        </div>
        <div className="recent-event-container">
          {/* <div className="foot-prints">
            <img src={Paws} alt="paws" />
          </div> */}
          <div className="recent-evet-heading">
            <h2>Recent Event</h2>
          </div>
          <div className="recent-event-content">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item"
            >
              {recentEvents.map((event, idx) => (
                <div key={idx} className="card">
                  <div className="card-body">
                    {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                    <img src={event.Image} alt="Card_Hero_Image" />
                    <div className="card-content">
                      <div className="card-heading-wishlist">
                        <h4 className="card-title">{event.title}</h4>
                        {/* <img
                        src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1"
                        alt="wishlist"
                      /> */}
                      </div>
                      <p className="card-description">{event.description}</p>
                      <div className="btn-eventt-details">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedEvent(event);
                            TogglePopUp();
                          }}
                        >
                          Event Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS */}
      <div className="upcoming-event-wrapper">
        <div className="foot-prints">
          <img src={Paws2} alt="paws" />
        </div>
        <div className="upcoming-event-container">
          <div className="upcoming-evet-heading">
            <h2>Upcoming Event</h2>
          </div>
          <div className="upcoming-event-content">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item"
            >
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="card">
                  <div className="card-body">
                    {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                    <img src={event.Image} alt="Card_Hero_Image" />
                    <div className="card-content">
                      <div className="card-heading-wishlist">
                        <h4 className="card-title">{event.title}</h4>
                        {/* <img
                        src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1"
                        alt="wishlist"
                      /> */}
                      </div>
                      <p className="card-description">{event.description}</p>
                      <div className="btn-eventt-details">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedEvent(event);
                            TogglePopUp();
                          }}
                        >
                          Event Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div className="our-partners-container">
        <div className="our-partners-heading">
          <h2>Our Partners</h2>
        </div>
        <div className="our-partners-content">
          <OwlCarousel
            className="owl-theme"
            loop
            center
            margin={1}
            autoplay={true}
            dots={false}
            touchDrag={true}
            lazyLoad={true}
            responsive={owlState} // add this line
            animateOut={'fadeOut'}
            animateIn={'flipInX'}
          >
            {/* {allPartners.map((partner, idx) => { */}
            {/* return ( */}
            <div className="item" key={1}>
              <h3>People For Animal</h3>
              <p>
                Animals in India need your help. People For Animals receives 99%
                of its funding from people like you. Your donation, however
                small is vital to the continuation of our work and makes a
                difference to the ................
              </p>
            </div>
            <div className="item" key={2}>
              <h3>Sanjay Gandhi Animal Care</h3>
              <p>
                The Sanjay Gandhi Animal Care Centre (SGACC) is India's oldest
                and Delhi's largest all-animal shelter.
              </p>
            </div>
            <div className="item" key={3}>
              <h3>PETA India</h3>
              <p>
                Together, we can make the world a better place for all beings.
                Your donation will go to work
              </p>
            </div>
            <div className="item" key={4}>
              <h3>Animal Rahat</h3>
              <p>
                Animal Rahat (rahat means “relief” in Hindi) is a unique program
                that aims to help some of the most neglected animals in the
                world—the bullocks, donkeys, and other working animals of
                India......
              </p>
            </div>
            <div className="item" key={5}>
              <h3>Vet Helpline India (P) Ltd</h3>
              <p>
                We help organizations conduct studies and implement development
                projects in the field of animal health care, animal welfare,
                livestock development, food safety, and public health.....
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {PopUpContent}
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Event;
