const initialState = {code: ``}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CODE':
      return { ...state, code: action.payload };
    case 'ADD_CHILD':
      return { ...state, child: action.payload };
      case 'CHANGE_FOCUS':
        return { ...state, focus: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
