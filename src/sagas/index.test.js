import { expect } from 'chai';
import { call, put } from 'redux-saga/effects'

import './';

describe('saga', () => {
	beforeEach(ngModule('app.sagas'));

	it('fetch trending gif', (done) => {
		inject(function(sagas, giphyAPI) {
			const generator = sagas.fetchTrendingGif();
			expect(generator.next().value).to.eql(call(giphyAPI.trendingGif));
			expect(generator.next('http://apitrendinggiphy/foo/bar.jpg').value).to.eql(put({
				type: "TRENDING_GIF_FETCHED", 
				payload: 'http://apitrendinggiphy/foo/bar.jpg'
			}));
			done();
		});
	});
	it('Error on fetch trending giphy', (done) => {
		inject(function(sagas, giphyAPI) {
			const generator = sagas.fetchTrendingGif();
			expect(generator.next().value).to.eql(call(giphyAPI.trendingGif));
			expect(
				generator.throw(new Error('network request error')).value
			).to.eql(put({
				type: "TRENDING_GIF_FETCHED_FAILED", 
				payload: 'network request error'
			}));
			done();
		});
	});

	it('fetch random gif', (done) => {
		inject(function(sagas, giphyAPI) {
			const generator = sagas.fetchRandomGif({payload: 'cat'});
			expect(generator.next().value).to.eql(call(giphyAPI.randomGif, 'cat'));
			expect(generator.next('http://api.giphy.com/foo/bar.jpg').value).to.eql(put({
				type: "RANDOM_GIF_FETCHED", 
				payload: 'http://api.giphy.com/foo/bar.jpg'
			}));
			done();
		});
	});
	it('Error on fetch random gif', (done) => {
		inject(function(sagas, giphyAPI) {
			const generator = sagas.fetchRandomGif({payload: 'cat'});
			expect(generator.next().value).to.eql(call(giphyAPI.randomGif, 'cat'));
			expect(
				generator.throw(new Error('network request error')).value
			).to.eql(put({
				type: "RANDOM_GIF_FETCHED_FAILED", 
				payload: 'network request error'
			}));
			done();
		});
	});

	it('fetch cat', (done) => {
		inject(function(sagas, catAPI) {
			const generator = sagas.fetchCat();
			expect(generator.next().value).to.eql(call(catAPI));
			expect(generator.next('http://apichat/foo/bar.jpg').value).to.eql(put({
				type: "CAT_FETCHED", 
				payload: 'http://apichat/foo/bar.jpg'
			}));
			done();
		});
	});
	it('Error on fetch cat ', (done) => {
		inject(function(sagas, catAPI) {
			const generator = sagas.fetchCat();
			expect(generator.next().value).to.eql(call(catAPI));
			expect(
				generator.throw(new Error('network request error')).value
			).to.eql(put({
				type: "CAT_FETCHED_FAILED", 
				payload: 'network request error'
			}));
			done();
		});
	});
})