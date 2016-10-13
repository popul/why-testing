import { combineReducers } from 'redux';

import items from './items';
import forms from './forms';
import cat from './cat';
import giphy from './giphy';

const reducers = combineReducers({
	items,
	forms,
	cat,
	giphy
});

export default reducers;

/*
export default angular
	.module('app.Reducers', [])
	.provider('Reducers', class {
		$get() {
			return reducers;
		}
	});

	*/