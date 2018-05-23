import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import API from '../lib/Api';
import { signedIn as signedInAction } from '../actions/userActions';


function* checkLogin(action) {
	const user = yield select((state) => state.user)
	if(user.token && user.email){
		API.setLoginData(user.email, user.token);
		yield put(signedInAction());
	}
}

function* userSignedIn(action){
	API.setLoginData(action.payload.email, action.payload.authentication_token);
	saveToLocalStorage(action.payload);
	yield put(signedInAction());
}

function* userSignedOut(){
	API.singOut();
	saveToLocalStorage({ name: '', email: '', authentication_token: '' });
}

function saveToLocalStorage(data){
	localStorage.setItem('name', data.name);
	localStorage.setItem('email', data.email);
	localStorage.setItem('token', data.authentication_token);
}


export default [
	takeEvery("INIT", checkLogin),
	takeEvery("USER_LOGIN_FULFILLED", userSignedIn),
	takeEvery("USER_SIGN_OUT", userSignedOut)
];
