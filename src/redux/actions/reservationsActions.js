
export const postReservation = (dataEvents,total,form) => async () => {
  try {
    // const response = await fetch(`http://localhost:3000/reservation/${id.id}`);
  } catch (err) {
    console.log('setReservation -> err', err);
  }
};

export const setDataEvent = (event) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_EVENT',
    payload: event,
  });
};

export const setDataTotal = (event) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_TOTAL',
    payload: event,
  });
};

export const setDataForm = (event) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_FORM',
    payload: event,
  });
};