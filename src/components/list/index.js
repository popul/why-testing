import 'angular';

import template from './list.html';
import Component from './list.component';

export default angular
	.module('app.list', [])
	.component('list', {
		bindings: {
			items: '<'
		},
		template,
		controller: Component,
	}
);