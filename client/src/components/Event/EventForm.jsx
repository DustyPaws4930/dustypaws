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
import eventBGImage from "../project-files/event-bg-image.svg";
import Pagination from "../PaginationComponent/Pagination.js";
import mobileImg1 from "../project-files/report-mobile-top.svg"
import mobileImg2 from "../project-files/report-mobile-bottom.svg"


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
        setEventData({
          title: "",
          description: "",
          address: "",
          date: new Date().toLocaleDateString("en-CA"),
          price: "",
          createdBy: "",
          Image: "",
        });
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
  let fetchEventsURl = getApiPath() + "event/fetchAll";
  return (
    <>
      <Header />
      <div className="event-ngo">
        <h2> Create Events</h2>
        <img src={mobileImg1} alt="" className="mobile-img-1" />
        <div className="event-form-wrapper">
          <form
            action="/"
            onSubmit={(e) => {
              HandleFormSubmit(e);
            }}
          >
            <div className="event-form">
              <label>Title</label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="title"
                id="title"
              />
            </div>
            <div className="event-form">
              <label>Description</label>
              <input
                type="text"
                value={eventData.description}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="description"
                id="description"
              />
            </div>
            <div className="event-form">
              <label htmlFor="img">Upload image:</label>
              <input
                onChange={(e) => {
                  handleFileChange(e);
                }}
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div className="event-form">
              <label>Location</label>
              <input
                type="text"
                value={eventData.address}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="address"
                id="address"
              />
            </div>
            <div className="event-form">
              <label>Date:</label>
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="date"
              />
            </div>
            <div className="event-form">
              <label>price</label>
              <input
                type="number"
                value={eventData.price}
                onChange={(e) => {
                  HandleInputChange(e);
                }}
                name="price"
              />
            </div>
            <div className="event-form">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <img src={mobileImg2} alt="" className="mobile-img-2" />
        <div className="event-bg-image">
          <img src={eventBGImage} alt="eventBGImage" />
        </div>
      </div>
      <div className="NGO-Events">
        <div>
          <h3 className="NGO-Events-header">Created Events</h3>
        </div>
        <Pagination apiUrl={fetchEventsURl} />
      </div>
      <Footer />
    </>
  );
};

export default EventForm;
