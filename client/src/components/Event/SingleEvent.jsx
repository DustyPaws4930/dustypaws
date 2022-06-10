import React from 'react'
import { Link } from 'react-router-dom'

const SingleEvent = () => {
  return (
    <>
      <div>
          <img src="" alt="image1" />
          <img src="" alt="image2" />
      </div>
      <div>
          <h2>Event Title</h2>
          <p>fetch event date</p>
          <p>Fetch even location</p>
          <p>ticket price</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut, labore laboriosam qui quos, odit fugiat natus eveniet aliquid saepe esse incidunt totam voluptate non modi! A enim velit nihil.</p>
         <Link to=''> <button>Edit</button></Link>
         <button>Delete</button>
      </div>
      
    </>
  )
}

export default SingleEvent
