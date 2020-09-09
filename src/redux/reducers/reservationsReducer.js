const INITIAL_STATE = {
  error: null,
  loading: false,
  // eventId: '',
  // userId: '';
  // total:'',
  dataform: '',
  event: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_RESERVATION_EVENT':
      return {
        ...state,
        event: action.payload,
        loading: false,
        error: null,
      };
    case 'DATA_RESERVATION_TOTAL':
      return {
        ...state,
        total: action.payload,
        loading: false,
        error: null,
      };
    case 'DATA_RESERVATION_FORM':
      return {
        ...state,
        dataform: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
