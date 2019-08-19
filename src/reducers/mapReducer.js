const defaultState = {
  sidebar: false,
  eventSidebar: false,
  events: []
}


export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "OPEN-SIDE-BAR":
      return {...state, sidebar:true, eventSidebar:false};
    case "CLOSE-SIDE-BAR":
      return {...state, sidebar:false};
    case "OPEN-EVENT-SIDE-BAR":
      return {...state, eventSidebar:true, sidebar:false, events:[...state.events, payload]};
    case "CLOSE-EVENT-SIDE-BAR":
      return {...state, eventSidebar:false, events:payload};
    default:
      return state;
  }
};
