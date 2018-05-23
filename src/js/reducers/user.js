
const initialState = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token'),
  signedIn: false
}

const user = (state = initialState, { type, payload }) => {

  switch (type) {
    case 'USER_LOGIN_FULFILLED':{
      const { id, name, email } = payload;
      return {
        ...state,
        id,
        name,
        email,
        token: payload.authentication_token
      }
    }
    case 'USER_SIGNED_ID':{
      return { ...state, signedIn: true}
    }
    case 'USER_SIGN_OUT':{
      return {
        name: '',
        email: '',
        token: '',
        signedIn: false
      }
    }
    case 'USER_SIGN_UP_FULFILLED':{
      const { id, name, email } = payload;
      return {
        ...state,
        id,
        name,
        email,
        token: payload.authentication_token
      }
    }
    default:
      break
  }
  return state
}

export default user;
