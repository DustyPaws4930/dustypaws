import React from 'react'

const EventEdit = props => {
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
    </>
  )
}

export default EventEdit
