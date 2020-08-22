import React from 'react';
import '../assets/styles/components/Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import Prueba from "../assets/img/Pruegba.jpg";

const conteinerCarusel = () =>  (
    <section className='carousel'>
      <Carousel>

         <Carousel.Item>
              <img
               className="d-block w-100"
               src={Prueba}
               alt="First slide"
               />
        </Carousel.Item>

        <Carousel.Item>
              <img
               className="d-block w-100"
               src={Prueba}
               alt="First slide"
               />
        </Carousel.Item>

        <Carousel.Item>
              <img
               className="d-block w-100"
               src={Prueba}
               alt="First slide"
               />
        </Carousel.Item>
 
      </Carousel>
    </section>
  );


export default conteinerCarusel;
