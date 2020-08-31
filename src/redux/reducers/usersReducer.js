const INITIAL_STATE = {
  error: null,
  loading: false,
  dataUsers: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_USER':
      return {
        ...state,
        dataUsers: action.payload,
        loading: false,
        error: null,
      };
    case 'ADD_USER':
      return {
        ...state,
        isLogged: true,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
