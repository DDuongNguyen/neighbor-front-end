const defaultState = {
  currentUser: {}
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "SIGNIN":
      return {...state, currentUser:payload};
    case "SIGNUP":
      return payload;
    case "PERSIST":
      return {...state, currentUser:payload};
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};
