const URL_API = 'https://ture-api-db.vercel.app/api';

export const getAllEvents = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/events/  `);

    const data = await response.json();
    dispatch({
      type: 'DATA_EVENTS',
      payload: data.data,
    });
  } catch (error) {
    console.error('getAllUsers -> err', error);
  }
};

export const getEventsRecents = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/events/recents`);
    const data = await response.json();
    dispatch({
      type: 'EVENTS_RECENTS',
      payload: data.data,
    });
  } catch (err) {
    console.log('getEventById -> err', err);
  }
};

export const getEventById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/events/${id.id}`);
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
    const response = await fetch(`${URL_API}/events/search/?name=${name}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_NAME',
      payload: data.data,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};

export const filterEventByDates = (startDate, endDate) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/events/search/?startDate=${startDate}&endDate=${endDate}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_DATES',
      payload: data.data,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};

export const filterEventByLocation = (location) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/events/search/?location=${location}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_LOCATION',
      payload: data.data,
    });
  } catch (err) {
    console.log('filterEvents -> err', err);
  }
};
