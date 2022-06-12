// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import './Event.css';

const Event = props => {

  // const [ cards, setCards ] = useState({});

  // useEffect(function loadCardsDetails(){
  //   axios.get('')
  //   .then(result =>{
  //     console.log("fetch the data from DB")
  //     setCards()
  //   })
  //   .catch(error => console.log(error))
  // },[])

  return (
    <>
    <div className='featured-event'>
      <img src="" alt="featured Event" />
      <h2>fetch heading from thr create event </h2>
      <p>fetch description from thr create event</p>
      <Link to='/singleEvent'><button>View More</button></Link>
    </div>
    
      <Carousel>
          <div className='card'>
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>

              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>
          
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>
          
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>
          </div>
      </Carousel>


      <div>
          <h1>Upcoming Week</h1>
       <Carousel>
          <div className='card'>
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>

      
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>
      
        
              <div className='card-body'>
                  <div className='card-date'>
                    <p>display date </p>
                  </div>
                  <img src="" alt="" />
                  <h2 className='card-title'>title</h2>
                  <img src="" alt="wishlist" />
                  <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                  <Link to='/singleEvent'><p>View More...</p></Link>
              </div>
          </div>
       </Carousel>


        <h1>Our partners</h1>
        <Carousel>
            <div className='card'>
              <div className='card-body'>
                    <img src="" alt="" />
                    <h2 className='card-title'>NGO name</h2>
                    <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                </div>

                <div className='card-body'>
                    <img src="" alt="" />
                    <h2 className='card-title'>NGO name</h2>
                    <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                </div>

                <div className='card-body'>
                    <img src="" alt="" />
                    <h2 className='card-title'>NGO name</h2>
                    <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                </div>

                <div className='card-body'>
                    <img src="" alt="" />
                    <h2 className='card-title'>NGO name</h2>
                    <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                </div>
              
            </div>
        </Carousel>
      </div>

    </>
  )
}

export default Event
