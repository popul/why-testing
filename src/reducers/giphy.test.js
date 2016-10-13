import { expect } from 'chai';

import giphyReducer from './giphy';

describe('reducer giphy', () => {
	it('trending gif fetched', () => {
		const actual = giphyReducer(undefined, { 
			type: 'TRENDING_GIF_FETCHED',
			payload: 'http://giphy.com/foo/bar'
		});
		const expected = {
			url: 'http://giphy.com/foo/bar'
		}

		expect(actual).to.eql(expected);
	});
	it('random gif fetched', () => {
		const actual = giphyReducer(undefined, { 
			type: 'RANDOM_GIF_FETCHED',
			payload: 'http://giphy.com/foo/bar'
		});
		const expected = {
			url: 'http://giphy.com/foo/bar'
		}

		expect(actual).to.eql(expected);
	})
});