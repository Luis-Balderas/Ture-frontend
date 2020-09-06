// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/user/');
    const data = await response.json();
    console.log('dataUser -> data', data);
    dispatch({
      type: 'DATA_ALL_USER',
      payload: data.body,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const getUser = (email,password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/user/');
    // const data = await response.json();
    // console.log('dataUser -> data', data);
    dispatch({
      type: 'DATA_USER',
      payload: email,password,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/user/');
    const data = await response.json();
    console.log('dataUser -> data', data);
    dispatch({
      type: 'DATA_USER',
      payload: user,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};




