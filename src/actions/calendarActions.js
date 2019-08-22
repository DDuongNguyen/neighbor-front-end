const openCalendarSidebar = (date) => dispatch => {
    dispatch({type:'OPEN-CALENDAR-SIDE-BAR',payload:date});
    }
const closeCalendarSidebar = () => dispatch => {
    dispatch({type:'CLOSE-CALENDAR-SIDE-BAR'});
    }
const createEvent = (userId,name,description,time) => dispatch => {

    const config = {
      method:"POST",
      headers: {
        'content_type': "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        name:name,
        description:description,
        time:time
      })
    }

    fetch(`http://localhost:3000/events/`,config)
    .then(resp => resp.json())
    .then(user => {
      dispatch({type:'USER-CREATE-EVENT',payload:user});
    })









    }

export default {
  openCalendarSidebar,
  closeCalendarSidebar,
  createEvent}
