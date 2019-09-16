const saveEvents = () => dispatch => {

  fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(events => {
      dispatch({type:'SAVE',payload:events});
    });
};

const createInvite = (hostId,currentUserId,eventId) => dispatch => {
  // debugger
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
    .then(resp => resp.json())
    .then(user => {
      dispatch({type:"UPDATED-USER",payload:user})
    })
    };

const currentUserCreateInvite = (hostId,currentUserId,eventId) => dispatch => {
  console.log('host id',hostId,'current user id',currentUserId,'event id',eventId);
  // debugger

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
    .then(resp => resp.json())
    .then(currentUser => {
      dispatch({type:"UPDATED-CURRENT-USER",payload:currentUser})
    })
    };

const uploadPicture = (file,eventId) => dispatch => {
  console.log('file',file,'event id',eventId);
  // debugger
  fetch(`http://localhost:3000/events/${eventId}/`, {
      method: "PATCH",
      body: file
    })
      .then(resp => resp.json())
      .then(currentUser => {
          dispatch({type:"UPDATED-CURRENT-USER",payload:currentUser})
        })}
  // const config = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     inviter_id:hostId,
  //     invitee_id:currentUserId,
  //     event_id:eventId
  //   })
  // }
  //
  //     fetch("http://localhost:3000/invites",config)
  //   })

const currentUserDeleteInvite = (hostId,currentUserId,eventId) => dispatch => {
  console.log('host id',hostId,'current user id',currentUserId,'event id',eventId);

  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inviter_id:hostId,
      invitee_id:currentUserId,
      event_id:eventId
    })
  }

    fetch("http://localhost:3000/delete_invite",config)
  .then(resp => resp.json())
  .then(currentUser => {
    dispatch({type:"UPDATED-CURRENT-USER",payload:currentUser})
  })
  };

const deleteInvite = (hostId,currentUserId,eventId) => dispatch => {
  console.log('host id',hostId,'current user id',currentUserId,'event id',eventId);
  // debugger

  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inviter_id:hostId,
      invitee_id:currentUserId,
      event_id:eventId
    })
  }

      fetch("http://localhost:3000/delete_invite",config)
    .then(resp => resp.json())
    .then(user => {
      dispatch({type:"DELETED-EVENT-USER",payload:user})
    })
    };

export default {
  saveEvents,
  createInvite,
  deleteInvite,
  currentUserCreateInvite,
  currentUserDeleteInvite,
  uploadPicture
}
