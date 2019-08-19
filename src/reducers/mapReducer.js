const defaultState = {
  sidebar: false,
  eventSidebar: false,
  user: ''
}


export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "OPEN-SIDE-BAR":
      return {...state, sidebar:true, eventSidebar:false};
    case "CLOSE-SIDE-BAR":
      return {...state, sidebar:false};
    case "OPEN-EVENT-SIDE-BAR":
      return {...state, eventSidebar:true, sidebar:false, user: payload};
    case "CLOSE-EVENT-SIDE-BAR":
      return {...state, eventSidebar:false, user:payload};
    default:
      return state;
  }
};
