import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// import {
// 	fetchProjects as fetchProjectsAction,
// } from '../actions/projectActions';

function* checkLogin(action) {
	// yield put(fetchProjectsAction());
}



export default [
	takeEvery("INIT", checkLogin)
];
