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
      alert("token: "+ localStorage.token)
      dispatch({type:"SIGNIN",payload: data.user});
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

const logOut = () => dispatch =>{
  // debugger
  // console.log('meow');
  if (localStorage.token){
  localStorage.removeItem('token');
  alert('u got log out m8')
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

export default {
  signUp,
  signIn,
  logOut,
  getUsers,
  persistUser
}
