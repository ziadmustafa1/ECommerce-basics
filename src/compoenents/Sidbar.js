import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import a from '../img/1.png'
import c from '../img/2.png'
import f from '../img/3.png'
import g from '../img/4.png'

const Sidbar = () => {
  return (
    <div className='sidbar'>
      
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={g}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Sidbar
