import { expect } from 'chai';

import forms from './forms';

describe('reducer forms', () => {
	it('init', () => {
		const actual = forms(undefined, {});
		const expected = {
			editMode: false
		};

		expect(actual).to.eql(expected);
	});

	it('toggle edit mode', () => {
		const actual = forms(undefined, {
			type: 'TOGGLE_EDITMODE'
		});
		const expected = {
			editMode: true
		};

		expect(actual).to.eql(expected);
	});

	it('disable edit mode when adding item', () => {
		const actual = forms({
			editMode: true
		}, {
			type: 'ADD_ITEM'
		});
		const expected = {
			editMode: false
		}

		expect(actual).to.eql(expected);
	});

	it('disable edit mode when deleting item', () => {
		const actual = forms({
			editMode: true
		}, {
			type: 'DELETE_ITEM'
		});
		const expected = {
			editMode: false
		}

		expect(actual).to.eql(expected);
	});
})