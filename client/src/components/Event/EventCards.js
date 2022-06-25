import React from 'react'
import { Link } from 'react-router-dom'

const EventCards = props => {
  return (
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
  )
}

export default EventCards
