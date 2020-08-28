const INITIAL_STATE = {
  error: null,
  loading: false,
  dataEvents: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_EVENTS':
      return {
        ...state,
        dataEvents: action.payload,
        loading: false,
        error: null,
      };
    case 'EVENT_BY_ID':
      return {
        ...state,
        eventById: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
