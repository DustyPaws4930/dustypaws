// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Event.css';
// import Header from '../Header/Header';
import Carousel from  "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// import { img } from '../images/'

const Event = props => {

  const responsive = {
    superLargeDesktop: {
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

  const owl = {
    1000: {
      items: 5
    },
    768: {
      items: 3
    },
    480: {
      items: 3
    },
    0:{
      items:1
    }
  };

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
        <div>
            <div className='featured-event-heading'>
                <h2>Featured Event</h2>
            </div>
            <div className='featured-event-date'>
              <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
              <p>Days to go</p>
            </div>
            <div className='featured-event-description'>
                <h4>Awareness Drive for stray animals</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur, amet id nobis, numquam laudantium excepturi fugit quaerat aspernatur, illo ipsumipsa esse architecto deleniti beatae doloribus. Minus, fuga obcaecati!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque voluptas sit rem eaque animi nisi, consequatur repellendus asperiores maiores, consectetur aut maxime, excepturi odio? Nesciunt veniam excepturi in quis.
                </p>
                <div className='btn-feature-event'>
                              <Link to='/singleEvent'><button>View</button></Link>
                          </div>
            </div>

        </div>
        <div className='featured-event-img'>
            <img src="" alt="featured Event" />
        </div>
      </div>

      <hr />

      
      <div className='recent-event-container'>
        <div className='recent-evet-heading'>
          <h2>Recent Event</h2>
        </div>
        <div className='recent-event-content'>
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
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div>
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>


              </Carousel>
        </div>
      </div>

      <div className='upcoming-event-container'>
        <div className='upcoming-evet-heading'>
          <h2>Upcoming Event</h2>
        </div>
        <div className='upcoming-event-content'>
              <Carousel 
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item">

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                      {/* <div className='card-date'>
                          <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740596.png?token=exp=1655976101~hmac=ee24fa289b78d2da49995ba8d659d3d0" alt="" />
                      </div> */}
                      <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="" />
                      <div className='card-content'>
                          <div className='card-heading-wishlist'>
                            <h4 className='card-title'>Indian Animal Health Summit and Awards 2022</h4>
                            <img src="https://cdn-icons.flaticon.com/png/512/3132/premium/3132924.png?token=exp=1655972418~hmac=7f4e298da5e90666a083e130513c26e1" alt="wishlist" />
                          </div>
                          <p className='card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum harum possimus ut quia architecto ipsa. Unde deleniti consectetur veniam soluta? Minima dolorem vitae incidunt totam maxime fugit similique soluta quod.</p>
                          <div className='btn-eventt-details'>
                              <Link to='/singleEvent'><button>Event Details</button></Link>
                          </div>
                      </div>
                  </div>
                </div>


              </Carousel>
        </div>
      </div>
      <div className='our-partners-container'>
          <div className='our-partners-heading'>
              <h2>Upcoming Event</h2>
          </div>
          <div className='our-partners-content'>
              <OwlCarousel
                className='owl-theme'
                responsiveClass={true}
                responsive={owl}
                items='5'
                autoplay={false}
                dots={false}
                mouseDrag
                // loop={true}
                margin={20}
                center={true}
                >

                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                  <div className="item">
                      <h3>People For Animal</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum fugit tempore assumenda nam iusto corrupti eaque veritatis ab nisi laudantium, exercitationem laborum rem tenetur magnam nihil! Consectetur, quibusdam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam vero laudantium nobis consectetur fugiat quibusdam alias, corporis pariatur, recusandae odio voluptas hic. Rem ab hic doloribus pariatur cumque cum.
                      </p>
                  </div>
                </OwlCarousel>
          </div>
      </div>
      
      
    </>
  )
}

export default Event
