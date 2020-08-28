// eslint-disable-next-line import/prefer-default-export
export const getAllEvents = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/event');
    const data = await response.json();
    dispatch({
      type: 'DATA_EVENTS',
      payload: data.body,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const getEventById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/event/${id.id}`);
    const data = await response.json();
    dispatch({
      type: 'EVENT_BY_ID',
      payload: data.body,
    });
  } catch (err) {
    console.log('getEventById -> err', err);
  }
};
