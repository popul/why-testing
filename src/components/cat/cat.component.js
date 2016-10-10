import 'angular';

import * as actions from '../../actions';

import template from './cat.html';
import s from './styles.css';

export class CatController {
	constructor($ngRedux) {
		this.s = s;

		$ngRedux.connect(state=> {
			return {
				imgUrl: state.cat.url
			};
		}, actions)(this);
		
		this.fetchImage();
	}

	fetchImage() {
		this.imgUrl = undefined;
		this.fetchCat();
	}

	$onInit() {
	}
}

export default angular
	.module('app.cat', [])
	.component('cat', {
		template,
		controller: CatController,
	});