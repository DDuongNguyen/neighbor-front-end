const defaultState = {
  currentUser: {},
  users:[]
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "GET":
      return {...state, users:payload};
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
