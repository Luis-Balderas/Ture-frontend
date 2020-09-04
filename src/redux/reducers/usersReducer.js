const INITIAL_STATE = {
  error: null,
  loading: false,
  dataUsers: undefined,
  dataUser: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_ALL_USER':
      return {
        ...state,
        dataUsers: action.payload,
        loading: false,
        error: null,
      };
    case 'DATA_USER':
    return {
      ...state,
      dataUser: action.payload,
      loading: false,
      error: null,
    };
    default:
      return state;
  }
};
