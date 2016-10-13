import 'angular';

import * as actions from '../../actions';

import template from './edit.html';
import s from './styles.css';

export class EditController {
	constructor($ngRedux, $scope) {
		"ngInject";
		
		this.s = s;
		$ngRedux.connect(null, actions)(this);

		this.scope = $scope;
	}

	$onInit() {
	}

	add(val) {
		this.scope.val = '';
		this.addItem(val);
	}
}

export default angular
	.module('app.edit', [])
	.component('edit', {
		template,
		controller: EditController,
	}
);