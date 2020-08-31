import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/EventDetails.scss';
import CardDescription from '../components/CardDescription';
import CardPayment from '../components/CardPayment';
import Carousel from '../components/Carousel';
import { getEventById } from '../redux/actions/eventsActions';

const EventDetails = (props) => {
  const {
    match: { params: id },
  } = props;

  const { eventById } = props;

  useEffect(() => {
    const getEventDetail = async () => {
      await props.getEventById(id);
    };
    getEventDetail();
  }, []);

  if (!eventById) {
    return '';
  }
  return (
    <section className='event_details'>
      <div className='event_details__carousel'>
        <Carousel images={eventById.images} />
      </div>
      <div className='event_details__content'>
        <div className='event_details__container'>
          <div className='event_details__container--description'>
            <CardDescription data={eventById} />
          </div>
          <div className='event_details__container--payment'>
            <CardPayment data={eventById} />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapToStateToProps = ({ eventsReducer }) => eventsReducer;
const mapDispatchToProps = {
  getEventById,
};

export default connect(mapToStateToProps, mapDispatchToProps)(EventDetails);
