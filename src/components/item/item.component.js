import 'angular';

import * as actions from '../../actions';

import template from './item.html';
import s from './styles.css';

export class ItemController {
	constructor($ngRedux) {
		"ngInject";
		
		$ngRedux.connect(null, actions)(this);
	}

	$onInit() {
		this.s = s;
	}
}

export default angular
	.module('app.item', [])
	.component('item', {
		bindings: {
			value: '<',
			index: '<'
		},
		template,
		controller: ItemController,
	}
);