const initialState = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token'),
  signedIn: false
}

const user = (state = initialState, { type, payload }) => {


  return state
}

export default user;
