export const getAllEvents = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/events');

    const data = await response.json();
    dispatch({
      type: 'DATA_EVENTS',
      payload: data.data,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const getEventById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/api/events/${id.id}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_ID',
      payload: data.data,
    });
  } catch (err) {
    console.log('getEventById -> err', err);
  }
};

export const filterEventByName = (name) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/event/search/?name=${name}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_NAME',
      payload: data.body,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};

export const filterEventByDates = (startDate, endDate) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/event/search/?startDate=${startDate}&endDate=${endDate}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_DATES',
      payload: data.body,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};

export const filterEventByLocation = (location) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/event/search/?location=${location}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_LOCATION',
      payload: data.body,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};
