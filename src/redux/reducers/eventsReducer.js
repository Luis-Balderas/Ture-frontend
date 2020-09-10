const INITIAL_STATE = {
  error: null,
  loading: false,
  dataEvents: '',
  eventsRecents: '',
  isReservation: false,
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
    case 'EVENTS_RECENTS':
      return {
        ...state,
        eventsRecents: action.payload,
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
    case 'EVENT_BY_NAME':
      return {
        ...state,
        eventByName: action.payload,
        loading: false,
        error: null,
      };
    case 'EVENT_BY_LOCATION':
      return {
        ...state,
        eventByLocation: action.payload,
        loading: false,
        error: null,
      };
    case 'EVENT_BY_DATES':
      return {
        ...state,
        eventByDates: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
