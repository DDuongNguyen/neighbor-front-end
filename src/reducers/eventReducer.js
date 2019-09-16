const defaultState = {
  events: []
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "SAVE":
      return {...state, events:payload};
    default:
      return state;
  }
};
