const URL_API = 'https://ture-api-db.vercel.app/api';

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/user`);
    const data = await response.json();
    dispatch({
      type: 'DATA_ALL_USER',
      payload: data.body,
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const getUser = (user) => async (dispatch) => {
  const { email } = user;
  const { password } = user;
  try {
    const response = await fetch(`${URL_API}/auth/sign-in`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'mode': 'cors',
        'Authorization': `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
      }),
      body: JSON.stringify(`'apiKeyToken'  ${':'} 'e12e417876ce2a8e771f68ed5af05df3498e5e1924937e11c366fb90122688c1'`),
    });

    const data = await response.json();
    console.log('getUser -> data', data);

    dispatch({
      type: 'DATA_USER',
      payload: 'ok',
    });
  } catch (err) {
    console.log('getAllUsers -> err', err);
  }
};

export const setUser = (user) => async (dispatch) => {
  console.log('setUser -> user', user);
  try {
    const response = await fetch(`${URL_API}/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
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
