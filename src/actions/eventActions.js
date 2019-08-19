const saveEvents = () => dispatch => {

  fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(events => {
      dispatch({type:'SAVE',payload:events});
    });
};

const createInvite = (hostId,currentUserId,eventId) => dispatch => {
  console.log('host id',hostId,'current user id',currentUserId,'event id',eventId);

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inviter_id:hostId,
      invitee_id:currentUserId,
      event_id:eventId
    })
  }

  fetch("http://localhost:3000/invites",config)

};

export default {
  saveEvents,
  createInvite
}
