import React from 'react';

import CardOption from './CardOption';

const CardsList = (props) => {
  const { data } = props;

  return (
    <>
      <ul className='list-events'>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <CardOption item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardsList;
