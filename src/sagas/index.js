import 'babel-polyfill';
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import catAPI from '../services/catapi';


const fetchCat = (catAPI) => function* () {
	try {
		const url = yield call(catAPI);
		yield put({type: "CAT_FETCHED", payload: url});
	} catch (e) {
		yield put({type: "CAT_FETCHED_FAILED", payload: e.message});
	}
}

const mySaga = (catAPI) => function* () {
	yield* takeLatest("FETCH_CAT", fetchCat(catAPI));
}	

export default angular
	.module('app.sagas', [
		catAPI.name
	])
	.factory('sagas', function(catAPI) {
		return {
			fetchCat: fetchCat(catAPI),
			mySaga: mySaga(catAPI)
		};
	});