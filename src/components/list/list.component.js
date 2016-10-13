import 'angular';

import template from './list.html';
import s from './styles.css';

export class ListController {
	constructor() {
		"ngInject";
		
		this.s = s;
	}

	$onInit() {
	}
}

export default angular
	.module('app.list', [])
	.component('list', {
		bindings: {
			items: '<'
		},
		template,
		controller: ListController,
	}
);