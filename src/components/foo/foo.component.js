import 'angular';

import template from './foo.html';
import s from './styles.css';

export class FooController {
	constructor($interval) {
		"ngInject";

		this.interval = $interval;
	}

	$onInit() {
		this.count = 0;
		this.s = s;
		this.interval(() => this.increaseCount(), 1000 );	
	}

	click() {
		this.count += 100;
	}

	increaseCount() {
		this.count += 1;
	}
}

export default angular
	.module('app.foo', [])
	.component('foo', {
		template,
		controller: FooController,
	}
);