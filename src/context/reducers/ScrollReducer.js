export const scrollReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSITION": {
      return {
        ...state,
        position: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
