import { combineReducers } from 'redux';

import items from './items';
import forms from './forms';
import cat from './cat';

const reducers = combineReducers({
	items,
	forms,
	cat
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