import 'babel-polyfill';
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import catAPI from '../services/catapi';
import giphyAPI from '../services/giphy';

const fetchCat = (api) => function* () {
	try {
		const url = yield call(api);
		yield put({type: "CAT_FETCHED", payload: url});
	} catch (e) {
		yield put({type: "CAT_FETCHED_FAILED", payload: e.message});
	}
}

const fetchTrendingGif = (api) => function* () {
	try {
		const url = yield call(api);
		yield put({type: "TRENDING_GIF_FETCHED", payload: url});
	} catch (e) {
		yield put({type: "TRENDING_GIF_FETCHED_FAILED", payload: e.message});
	}
}

const fetchRandomGif = (api) => function* (action) {
	try {
		const url = yield call(api, action.payload);
		yield put({type: "RANDOM_GIF_FETCHED", payload: url});
	} catch (e) {
		yield put({type: "RANDOM_GIF_FETCHED_FAILED", payload: e.message});
	}
}


const mySaga = (catAPI, giphyAPI) => function* () {
	yield [ 
		takeLatest("FETCH_CAT", fetchCat(catAPI)),
		takeLatest("FETCH_TRENDING_GIF", fetchTrendingGif(giphyAPI.trendingGif)),
		takeLatest("FETCH_RANDOM_GIF", fetchRandomGif(giphyAPI.randomGif))
	];	
}	

export default angular
	.module('app.sagas', [
		catAPI.name,
		giphyAPI.name
	])
	.factory('sagas', function(catAPI, giphyAPI) {
		return {
			fetchCat: fetchCat(catAPI),
			fetchTrendingGif: fetchTrendingGif(giphyAPI.trendingGif),
			fetchRandomGif: fetchRandomGif(giphyAPI.randomGif),
			mySaga: mySaga(catAPI, giphyAPI),			
		};
	});