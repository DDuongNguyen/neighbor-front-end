const openSidebar = () => dispatch => {
    dispatch({type:'OPEN-SIDE-BAR'});
    }
const closeSidebar = () => dispatch => {
    dispatch({type:'CLOSE-SIDE-BAR'});
    }

const openEventSidebar = (user) => dispatch => {
    dispatch({type:'OPEN-EVENT-SIDE-BAR',payload: user});
    }
const closeEventSidebar = (user) => dispatch => {
    dispatch({type:'CLOSE-EVENT-SIDE-BAR',payload: user});
    }

export default {
  openSidebar,
  closeSidebar,
  openEventSidebar,
  closeEventSidebar
}
