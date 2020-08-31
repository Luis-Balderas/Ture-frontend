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

export const createUser = (user, idEvent) => async (dispatch) => {
  try {
    const newUser = {
      ...user,
      event: idEvent,
    };

    const response = await fetch('http://localhost:3000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log('dataUser -> data', data);

    if (data.error !== '') {
      throw new Error(data.error);
    }
    dispatch({
      type: 'ADD_USER',
    });
  } catch (err) {
    console.log('createUser -> err', err);
  }
};
