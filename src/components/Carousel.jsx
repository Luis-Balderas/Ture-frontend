import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carousel.scss';

const ControlledCarousel = (props) => {
  const { images, id } = props;
  return (
    <section className='carousel'>
      <div className='carousel__items'>
        {images.map((img, i) => (
          <React.Fragment key={id + String(i)}>
            <img src={img} alt='events-images' />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ControlledCarousel;
