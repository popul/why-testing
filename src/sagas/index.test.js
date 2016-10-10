import { expect } from 'chai';
import { call, put } from 'redux-saga/effects'

import './';

describe('saga', () => {
	beforeEach(ngModule('app.sagas'));

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