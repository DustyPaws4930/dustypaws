import React from "react";
import "./Event.css";
import Header from "../Header/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { getApiPath, getToken, UploadFile } from "../../Common";
import axios from "axios";
import { toast } from "react-toastify";

const EventForm = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    address: "",
    date: new Date().toLocaleDateString("en-CA"),
    price: "",
    createdBy: "",
    Image: "",
  });

  const [fectchedEvents, setFetchedEvents] = useState([]);

  useEffect(() => {
    let userToken = getToken();

    let fetchEventsURl = getApiPath() + "event/fetchAll";

    if (userToken == null) {
      return;
    } else if (
      userToken !== null &&
      userToken !== "undefined" &&
      userToken !== ""
    ) {
      setLoggedInUser(userToken?.user);
    }

    axios
      .get(fetchEventsURl)
      .then((res) => {
        console.log(res.data);
        setFetchedEvents(res.data);
      })
      .catch((err) => {
        alert("Error occured while getting events");
        console.log(`Error occured ${err}`);
      });
  }, []);

  const HandleInputChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setEventData({ ...eventData, [name]: value });
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    eventData.createdBy = loggedInUser._id;

    const registerEventUrl = getApiPath() + "event/register";
    console.log(eventData);
    axios
      .post(registerEventUrl, eventData)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          setFetchedEvents(fectchedEvents.concat([res.data.Event]));
        }, 2200);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        console.log(err.response.data.message);
      });
  };

  // File change event handler
  const handleFileChange = async (e) => {
    UploadFile(e.target.files[0]).then((uploadedImage) => {
      eventData.Image = uploadedImage;
    });
  };

  return (
    <>
      <Header />
      <div className="event-ngo">
        <form
          action="/"
          onSubmit={(e) => {
            HandleFormSubmit(e);
          }}
        >
          <div className="event-form">
            <label>
              Title
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="title"
                id="title"
              />
            </label>
          </div>
          <div className="event-form">
            <label>
              Description
              <input
                type="text"
                value={eventData.description}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="description"
                id="description"
              />
            </label>
          </div>
          <div className="event-form">
            <label htmlFor="img">
              Upload image:
              <input
                onChange={(e) => {
                  handleFileChange(e);
                }}
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </label>
          </div>
          <div className="event-form">
            <label>
              Location
              <input
                type="text"
                value={eventData.address}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="address"
                id="address"
              />
            </label>
          </div>
          <div className="event-form">
            <label>
              Date:
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="eventDate"
              />
            </label>
          </div>
          <div className="event-form">
            <label>
              Time:
              <input type="time" name="eventTime" />
            </label>
          </div>
          <div className="event-form">
            <label>
              price
              <input
                type="number"
                value={eventData.price}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="price"
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h3>Created Events</h3>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {fectchedEvents.map((evnt, idx) => {
            return (
              <div key={idx} className="CardWrapper">
                <div className="card">
                  <div className="card-body">
                    <div className="card-date">
                      <p>{evnt.date}</p>
                    </div>
                    <img src={evnt.Image} alt={evnt.title} />
                    <h2 className="card-title">{evnt.title}</h2>
                    <p className="card-description">{evnt.description}</p>
                    <Link to="/singleEvent">
                      <button>View More...</button>
                    </Link>
                    <i className="fa fa-heart-o"></i>
                    <img src="" alt="dustbin" />
                    <Link to="/eventEdit">
                      <img src="" alt="edit" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default EventForm;
