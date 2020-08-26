import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carousel.scss';

const ControlledCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className='d-block w-100' src='http://getwallpapers.com/wallpaper/full/c/e/f/61064.jpg' alt='First slide' />
    </Carousel.Item>
  </Carousel>
);

export default ControlledCarousel;
