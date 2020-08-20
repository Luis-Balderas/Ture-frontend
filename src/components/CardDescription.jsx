import React from 'react';
import '../assets/styles/components/CardDescription.scss';

const CardDescription = () => {
  return (
    <section className='description'>
      <div className='description__head'>
        <div className='description__head--title_event'>
          <h5>Evento:</h5>
          <span>Land</span>
        </div>
        <div className='description__head--date'>
          <h5>Fecha:</h5>
          <span>31 jul - 20 ago</span>
        </div>
      </div>
      <div className='description__location'>
        <figure>
          <img src='https://icons-for-free.com/iconfiles/png/512/location-131965017472890605.png' alt='icon location' />
        </figure>
        <p className='location'>Ewaso Kendoong</p>
      </div>
      <div className='description__detail'>
        <div className='description__detail--title'>
          <h5>Descripción</h5>
        </div>
        <div className='description__detail--txt'>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ex, voluptate magni vitae assumenda voluptatem sit impedit eveniet
            inventore excepturi illo, corrupti aliquam esse rerum eius pariatur modi! Voluptas, quasi. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <p>
            Inventore veritatis totam nesciunt id aliquid culpa, ad sunt amet, placeat consectetur debitis tempora blanditiis non asperiores
            aperiam expedita. Perferendis, optio quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sint eos
            molestias aperiam fuga repudiandae, laboriosam quidem error rerum laudantium ab ipsum cupiditate vel inventore qui consectetur
            voluptatum temporibus dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem explicabo veniam! Dolores perspiciatis expedita, dolorum
            veritatis qui quo blanditiis? A necessitatibus ipsam harum obcaecati repudiandae, velit animi id quibusdam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardDescription;
