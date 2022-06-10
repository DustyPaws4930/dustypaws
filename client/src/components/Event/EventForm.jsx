import React from 'react'
import { Link } from 'react-router-dom'

const EventForm = () => {
  return (
    <>
      <div className='event-ngo'>
          <form action="">
                <div className="">
                    <label>
                    Title
                    <input type="text" name="title" />
                    </label>
                </div>
                <div className="">
                    <label>
                    Description
                    <input type="text" name="description" />
                    </label>
                </div>
                <div className="">
                    <label for="img">
                    Upload image:
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    </label>
                </div>
                <div className="">
                    <label>
                    Location
                    
                    </label>
                </div>
                <div className="">
                    <label>
                    Date:
                    <input type="date" name="eventDate" />
                    </label>
                </div>
                <div className="">
                    <label>
                    Time:
                    <input type="time" name="eventTime" />
                    </label>
                </div>
                <label>
                    price
                    <input type="number" name="price" />
                </label>
                <input type="submit" value="Submit" />
          </form>
          <img src="" alt="animation" />
      </div>


      <div>
        <h3>Created Events</h3>
        <div className='card'>
          <div className='card-body'>
              <div className='card-date'>
                <p>display date </p>
              </div>
              <img src="" alt="" />
              <h2 className='card-title'>title</h2>
              <img src="" alt="wishlist" />
              <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
              <Link to='/singleevent'><button>View More...</button></Link>
          </div>
      </div>
      <div className='card'>
          <div className='card-body'>
              <div className='card-date'>
                <p>display date </p>
              </div>
              <img src="" alt="" />
              <h2 className='card-title'>title</h2>
              <img src="" alt="wishlist" />
              <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
              <Link to='/singleevent'><button>View More...</button></Link>
          </div>
      </div>
      <div className='card'>
          <div className='card-body'>
              <div className='card-date'>
                <p>display date </p>
              </div>
              <img src="" alt="" />
              <h2 className='card-title'>title</h2>
              <img src="" alt="wishlist" />
              <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
              <Link to='/singleevent'><button>View More...</button></Link>
          </div>
      </div>
      </div>



      <div>

      </div>
    </>
  )
}

export default EventForm
