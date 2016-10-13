import template from './app.html';
import * as actions from '../../actions';

export class AppController {
	constructor($scope, $ngRedux) {
		"ngInject"

		this.scope = $scope;
		
		const unsubcribe = $ngRedux.connect(state => {
			return {
				items: state.items,
				editMode: state.forms.editMode
			};
		}, actions)(this);
		$scope.$on('$destroy', unsubcribe);
	}
}

export default angular
	.module('app.app', [])
	.component('app', {
		template,
		controller: AppController
	});