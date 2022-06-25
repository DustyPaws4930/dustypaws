import React from 'react'
import './Event.css';
import Header from "../Header/Header";
import Carousel from  "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'

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

  return (
    
    <>
      <Header/>
      <div className='event-ngo'>
          <form action="">
                <div className="event-form">
                    <label>
                    Title
                    <input type="text" name="title" />
                    </label>
                </div>
                <div className="event-form">
                    <label>
                    Description
                    <input type="text" name="description" />
                    </label>
                </div>
                <div className="event-form">
                    <label for="img">
                    Upload image:
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    </label>
                </div>
                <div className="event-form">
                    <label>
                    Location
                    
                    </label>
                </div>
                <div className="event-form">
                    <label>
                    Date:
                    <input type="date" name="eventDate" />
                    </label>
                </div>
                <div className="event-form">
                    <label>
                    Time:
                    <input type="time" name="eventTime" />
                    </label>
                </div>
                <div className='event-form'>
                  <label>
                      price
                      <input type="number" name="price" />
                  </label>
                </div>
                <input type="submit" value="Submit" />
          </form>
          <img src="" alt="animation" />
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
         itemClass="carousel-item">

          <div className='card'>
              <div className='card-body'>
                <div className='card-date'>
                    <p>display date </p>
                </div>
                <img src="" alt="" />
                <h2 className='card-title'>title</h2>
                <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                <Link to='/singleEvent'><button>View More...</button></Link>
                <i className='fa fa-heart-o'></i> 
                <img src='' alt="dustbin" />
                <Link to='/eventEdit'><img src="" alt="edit" /></Link>
            </div>
          </div>

          <div className='card'>
              <div className='card-body'>
                <div className='card-date'>
                    <p>display date </p>
                </div>
                <img src="" alt="" />
                <h2 className='card-title'>title</h2>
                <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                <Link to='/singleEvent'><button>View More...</button></Link>
                <i className='fa fa-heart-o'></i> 
                <img src='' alt="dustbin" />
                <Link to='/eventEdit'><img src="" alt="edit" /></Link>
            </div>
          </div>

          <div className='card'>
              <div className='card-body'>
                <div className='card-date'>
                    <p>display date </p>
                </div>
                <img src="" alt="" />
                <h2 className='card-title'>title</h2>
                <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                <Link to='/singleEvent'><button>View More...</button></Link>
                <i className='fa fa-heart-o'></i> 
                <img src='' alt="dustbin" />
                <Link to='/eventEdit'><img src="" alt="edit" /></Link>
            </div>
          </div>

          <div className='card'>
              <div className='card-body'>
                <div className='card-date'>
                    <p>display date </p>
                </div>
                <img src="" alt="" />
                <h2 className='card-title'>title</h2>
                <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                <Link to='/singleEvent'><button>View More...</button></Link>
                <i className='fa fa-heart-o'></i> 
                <img src='' alt="dustbin" />
                <Link to='/eventEdit'><img src="" alt="edit" /></Link>
            </div>
          </div>


        </Carousel>
      </div>
      <div>
        {/* <Footer /> */}
      </div>

    </>
  )
}

export default EventForm
