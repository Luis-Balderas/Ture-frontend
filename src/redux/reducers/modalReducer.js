const INITIAL_STATE = {
  isOpen: false,
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
