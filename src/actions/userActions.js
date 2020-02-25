const signUp = newUser => dispatch => {

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  };

  fetch("http://localhost:3000/users", config)
};

const signIn = user => dispatch => {

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  };

  fetch("http://localhost:3000/login", config)
    .then(resp => resp.json())
    .then(data => {
      if(!data.errors){
      localStorage.token = data.token;
      dispatch({type:"SIGNIN",payload: data.user}).then(window.location.reload());
    }
      else{
        alert("wrong cats mang")
      }});
};

const persistUser = () => dispatch => {
  const config = {
    headers: { Authorization: localStorage.token }
  };
  fetch("http://localhost:3000/auth", config)
    .then(resp => resp.json())
    .then(user => {
      dispatch({type:'PERSIST',payload:user});
    });
};

const logOut = (history) => dispatch =>{
  // debugger
  // console.log('meow');
  if (localStorage.token){
  localStorage.removeItem('token');
  alert('BYE!')
  // history.push('/')
  }
  else{alert('do a log in first m8')}
  dispatch({type:'LOGOUT',payload:''})
}

const getUsers = () => dispatch => {
  fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => {
      dispatch({type:'GET',payload:users});
    });
};

const updateUser = (user_id,newName,newNumber,newAddress) => dispatch => {
  // debugger
  const config = {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      'accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: user_id,
      newName: newName,
      newNumber: newNumber,
      newAddress: newAddress
    })
  }

  fetch(`http://localhost:3000/users/${user_id}`,config)
  .then(resp => resp.json())
  .then(currentUser => {
    dispatch({type:"UPDATED-CURRENT-USER",payload:currentUser})
  })
}

const updateUserImage = (file,user_id) => dispatch => {
    fetch(`http://localhost:3000/user_upload/${user_id}`, {
        method: "PATCH",
        body: file
      })
        .then(resp => resp.json())
        .then(currentUser => {
            dispatch({type:"UPDATED-CURRENT-USER",payload:currentUser})
          })
      }



export default {
  signUp,
  signIn,
  logOut,
  getUsers,
  persistUser,
  updateUser,
  updateUserImage
}
