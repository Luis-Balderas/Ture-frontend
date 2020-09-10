import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carousel.scss';

const ControlledCarousel = (props) => {
  const { images, id } = props;
  console.log('ControlledCarousel -> props', props);
  return (
    <Carousel>
      {images.map((img, i) => (
        <Carousel.Item key={id + i}>
          <img className='d-block w-100' src={img} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
