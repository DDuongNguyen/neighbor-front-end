const saveEvents = () => dispatch => {

  fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(events => {
      dispatch({type:'SAVE',payload:events});
    });
};

export default {
  saveEvents
}
