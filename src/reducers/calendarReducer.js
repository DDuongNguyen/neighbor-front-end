const defaultState = {
  sidebar: false,
  date:''}

  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case "OPEN-CALENDAR-SIDE-BAR":
        return {...state, sidebar:true, date:payload};
      case "CLOSE-CALENDAR-SIDE-BAR":
        return {...state, sidebar:false};
      default:
          return state;
}}
