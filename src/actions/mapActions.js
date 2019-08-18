const openSidebar = () => dispatch => {
    dispatch({type:'OPEN-SIDE-BAR'});
    }
const closeSidebar = () => dispatch => {
    dispatch({type:'CLOSE-SIDE-BAR'});
    }

const openEventSidebar = (event) => dispatch => {
    dispatch({type:'OPEN-EVENT-SIDE-BAR',payload: event});
    }
const closeEventSidebar = (event) => dispatch => {
    dispatch({type:'CLOSE-EVENT-SIDE-BAR',payload: event});
    }

export default {
  openSidebar,
  closeSidebar,
  openEventSidebar,
  closeEventSidebar
}
