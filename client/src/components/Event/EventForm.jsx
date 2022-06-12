import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import './Event.css';
// import { trash } from '../images/trash-can'

const EventForm = () => {


  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 1000, itemsToShow: 3},
  ]

  return (
    <>
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
        
            <Carousel breakPoints = {breakPoints}>
            <div className='card'>
                  <div className='card-body'>
                      <div className='card-date'>
                        <p>display date </p>
                      </div>
                      <img src="" alt="" />
                      <h2 className='card-title'>title</h2>
                      <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                      <Link to='/singleEvent'><button>View More...</button></Link>
                      {/* <i className='fa fa-heart-o'></i> */}
                      <img src='' alt="dustbin" />
                      <Link to='/eventEdit'><img src="" alt="edit" /></Link>
                  </div>
            
                  <div className='card-body'>
                      <div className='card-date'>
                        <p>display date </p>
                      </div>
                      <img src="" alt="" />
                      <h2 className='card-title'>title</h2>
                      <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                      <Link to='/singleEvent'><button>View More...</button></Link>
                      <img src="" alt="dustbin" />
                      <Link to='/eventEdit'><img src="" alt="edit" /></Link>
                  </div>
              
                  <div className='card-body'>
                      <div className='card-date'>
                        <p>display date </p>
                      </div>
                      <img src="" alt="" />
                      <h2 className='card-title'>title</h2>
                      <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                      <Link to='/singleEvent'><button>View More...</button></Link>

                      <img src="" alt="dustbin" />
                      <Link to='/eventEdit'><img src="" alt="edit" /></Link>
                  </div>

                  <div className='card-body'>
                      <div className='card-date'>
                        <p>display date </p>
                      </div>
                      <img src="" alt="" />
                      <h2 className='card-title'>title</h2>
                      <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                      <Link to='/singleEvent'><button>View More...</button></Link>

                      <img src="" alt="dustbin" />
                      <Link to='/eventEdit'><img src="" alt="edit" /></Link>
                  </div>
                  </div>
            </Carousel>
       
      </div>



      <div>

      </div>
    </>
  )
}

export default EventForm
