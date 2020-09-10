
export const postReservation = (eventId,userId,total,dataform) => async () => {
  try {
    // const response = await fetch(`http://localhost:3000/reservation/${id.id}`);
  } catch (err) {
    console.log('setReservation -> err', err);
  }
};

export const setDataEvent = (eventId) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_EVENT',
    payload: eventId,
  });
};

export const setDataTotal = (total) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_TOTAL',
    payload: total,
  });
};

export const setDataForm = (dataform) => async (dispatch) => {
  dispatch({
    type: 'DATA_RESERVATION_FORM',
    payload: dataform,
  });
};