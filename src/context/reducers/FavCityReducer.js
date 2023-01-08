export const favCityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      state.push(action.payload);
      return [...state];
    }
    default: {
      return [...state];
    }
  }
};
