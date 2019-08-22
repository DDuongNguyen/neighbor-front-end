const createMessage = (sender_id,receiver_id,content) => dispatch => {

    const config = {
      method:"POST",
      headers: {
        'content_type': "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        sender_id: sender_id,
        receiver_id:receiver_id,
        content:content
      })
    }

    fetch(`http://localhost:3000/messages/`,config)
    
    }

    export default {
      createMessage}
