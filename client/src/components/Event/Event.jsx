// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import './Event.css';
import Header from '../Header/Header';

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
    <Header />
    <div className='featured-event'>
      <img src="" alt="featured Event" />
      <h2>fetch heading from thr create event </h2>
      <p>fetch description from thr create event</p>
      <Link to='/singleEvent'><button>View More</button></Link>
    </div>
    
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

        <h1>Our partners</h1>
        <div className='slider'>
            <div className='slides'>
              <input type='radio' name='radio-btn' id='radio5' />
              <input type='radio' name='radio-btn' id='radio6' />
              <input type='radio' name='radio-btn' id='radio7' />
              <input type='radio' name='radio-btn' id='radio8' />

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
                  <div className='auto-btn5'></div>
                  <div className='auto-btn6'></div>
                  <div className='auto-btn7'></div>
                  <div className='auto-btn8'></div>
              </div>

              <div className='navigation-manual'>
                  <label for='radio5' className='manual-btn'></label>
                  <label for='radio6' className='manual-btn'></label>
                  <label for='radio7' className='manual-btn'></label>
                  <label for='radio8' className='manual-btn'></label>
              </div>


            </div>
      
        </div>

    </>
  )
}

export default Event
