import chai, { assert, expect } from 'chai';
import '../../../test-helpers';

import './foo.component';

describe('<foo />', () => {
	beforeEach(ngModule('app.foo'));

	it('counter number', (done) => {
		inject(($rootScope, $compile, $interval) => {
			var scope = $rootScope.$new();
			var element = $compile('<foo></foo>')(scope);

			$interval.flush(2000);
			scope.$apply();
	 
			var counterText = element[0].querySelector('#counter').innerHTML;
			counterText = counterText.replace(/^\s+|\s+$/g, '');

			expect(counterText).to.equal('2');

			done();
		});
	});

	it('counter', (done) => {
		inject(($rootScope, $compile) => {
			var scope = $rootScope.$new();
			var element = $compile('<foo></foo>')(scope);
			var controller = element.controller('foo');

			scope.$apply();

			element.find('md-button')[0].click();
			expect(controller.count).to.equal(100);

			done();
		});
	});
});