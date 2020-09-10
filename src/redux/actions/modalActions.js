export const openModal = (boolean) => async (dispatch) => {
  dispatch({
    type: 'OPEN_MODAL',
    payload: boolean,
  });
};

export const closeModal = (boolean) => async (dispatch) => {
  dispatch({
    type: 'CLOSE_MODAL',
    payload: boolean,
  });
};
