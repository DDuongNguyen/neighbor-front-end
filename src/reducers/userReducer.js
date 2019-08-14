const defaultState = {
  currentUser: {}
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {...state, currentUser:payload};
    case "SIGNUP":
      return payload;
    case "PERSIST":
      return {...state, currentUser:payload};
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
