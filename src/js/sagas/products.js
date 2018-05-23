import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import API from '../lib/Api';
import { fetchProducts as fetchProductsAction } from '../actions/productActions';


function* userSignedIn(action){
	yield put(fetchProductsAction());
}

export default [
	takeEvery("USER_SIGNED_ID", userSignedIn)
];
