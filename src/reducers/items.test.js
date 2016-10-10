import chai, { assert, expect } from 'chai';

import items from './items';

describe('reducer items', () => {
	it('check initial values', () => {
		const actual = items(undefined, {});
		const expected = [
			'foo',
			'bar',
			'baz'
		];

		expect(actual).to.eql(expected);
	});
	it('unknown action', () => {
		const actual = items(undefined, { type: 'UNKNOWN'});
		const expected = [
			'foo',
			'bar',
			'baz'
		];

		expect(actual).to.eql(expected);
	});
	it('add item', () => {
		const actual = items(undefined, {
			type: 'ADD_ITEM',
			payload: 'new value'
		});
		const expected = [
			'foo',
			'bar',
			'baz',
			'new value'
		];

		expect(actual).to.eql(expected);
	});

	it('delete item', () => {
		const actual = items(undefined, {
			type: 'DELETE_ITEM',
			payload: 1
		});
		const expected = [
			'foo',
			'baz',
		];

		expect(actual).to.eql(expected);

		const newState = items(actual, {
			type: 'DELETE_ITEM',
			payload: 0
		});

		expect(newState).to.eql([
			'baz'
		]);
	});
});