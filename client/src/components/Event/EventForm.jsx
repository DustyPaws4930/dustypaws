import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css';
import Header from "../Header/Header";


const EventForm = () => {

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
        <div className='slider'>
            <div className='slides'>
              <input type='radio' name='radio-btn' id='radio1' />
              <input type='radio' name='radio-btn' id='radio2' />
              <input type='radio' name='radio-btn' id='radio3' />
              <input type='radio' name='radio-btn' id='radio4' />

            <div className='slide'>


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


            </div>

              <div className='navigation-auto'>
                  <div className='auto-btn1'></div>
                  <div className='auto-btn2'></div>
                  <div className='auto-btn3'></div>
                  <div className='auto-btn4'></div>
              </div>

              <div className='navigation-manual'>
                  <label for='radio1' className='manual-btn'></label>
                  <label for='radio2' className='manual-btn'></label>
                  <label for='radio3' className='manual-btn'></label>
                  <label for='radio4' className='manual-btn'></label>
              </div>


            </div>
        </div>
      </div>



      <div>

      </div>
    </>
  )
}

export default EventForm


//  <div className='card-body'>
// <div className='card-date'>
//   <p>display date </p>
// </div>
// <img src="" alt="" />
// <h2 className='card-title'>title</h2>
// <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
// <Link to='/singleEvent'><button>View More...</button></Link>
//  <i className='fa fa-heart-o'></i> */}
// <img src='' alt="dustbin" />
// <Link to='/eventEdit'><img src="" alt="edit" /></Link>
// </div> 

