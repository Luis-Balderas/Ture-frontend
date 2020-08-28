import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carousel.scss';

const ControlledCarousel = (props) => {
  const { images } = props;
  return (
    <Carousel>
      {images.map((img) => (
        <Carousel.Item key={img._id}>
          <img className='d-block w-100' src={img} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
