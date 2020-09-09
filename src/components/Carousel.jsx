import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carousel.scss';

const ControlledCarousel = (props) => {
  const { images, id } = props;
  console.log('ControlledCarousel -> props', props);
  return (
    <section className='carousel'>
      <div className='carousel__items'>
        {images.map((img, i) => (
          <img src={img} alt='First slide' />
        ))}
      </div>
    </section>
  );
};

export default ControlledCarousel;
