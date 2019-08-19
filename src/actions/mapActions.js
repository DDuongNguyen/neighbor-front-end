const openSidebar = () => dispatch => {
    dispatch({type:'OPEN-SIDE-BAR'});
    }
const closeSidebar = () => dispatch => {
    dispatch({type:'CLOSE-SIDE-BAR'});
    }

const openEventSidebar = (events) => dispatch => {
    dispatch({type:'OPEN-EVENT-SIDE-BAR',payload: events});
    }
const closeEventSidebar = (events) => dispatch => {
    dispatch({type:'CLOSE-EVENT-SIDE-BAR',payload: events});
    }

export default {
  openSidebar,
  closeSidebar,
  openEventSidebar,
  closeEventSidebar
}
