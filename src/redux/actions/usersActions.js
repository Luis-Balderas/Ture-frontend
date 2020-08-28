// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/user/');
    const data = await response.json();
    console.log('dataUser -> data', data);
    dispatch({
      type: 'DATA_USER',
      payload: data.body,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};
