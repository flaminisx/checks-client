import API from '../lib/Api.js';

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FULFILLED = "USER_LOGIN_FULFILLED";
export const USER_SIGNED_ID = "USER_SIGNED_ID";
export const USER_SIGN_OUT = "USER_SIGN_OUT";
export const USER_SIGN_UP = "USER_SIGN_UP";


export const signIn = (email, password) => ({
  type: USER_LOGIN,
  payload: API.authenticate(email, password)
})

export const signedIn = () => ({
  type: USER_SIGNED_ID
})

export const signOut = () => ({
  type: USER_SIGN_OUT
})

export const signUp = (data) => ({
  type: USER_SIGN_UP,
  payload: API.signUp(data)
})
