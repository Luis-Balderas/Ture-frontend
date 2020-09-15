import React from 'react';
import { connect } from 'react-redux';

import CardOption from './CardOption';

const CardsList = (props) => {
  const { eventByName } = props;
  return (
    <>
      <ul className='list-events'>
        {eventByName.map((item) => {
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

const mapStateToProps = (reducers) => {
  return reducers.eventsReducer;
};
export default connect(mapStateToProps, {})(CardsList);
