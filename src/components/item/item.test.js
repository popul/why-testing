import chai, { assert, expect } from 'chai';
import sinon from 'sinon';

import '../../../test-helpers';

import './item.component';

describe('<item />', () => {
	beforeEach(done => {
		ngModule('app.item', $provide => {
			$provide.constant('$ngRedux', {
				connect: (map, actions) => (ctrl) => {
					for (let a in actions) {
						ctrl[a] = actions[a];
					}
				}
			});
		});
		done();
	});

	it('display value', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			var element = $compile('<item value="\'hey\'"></item>')(scope);
			var controller = element.controller('item');

			scope.$apply();
	 		
			var value = element[0].querySelector('.' + controller.s.value).innerHTML;

			expect(value).to.equal('hey');

			done();
		});
	});
	
	it('call delete on click', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			var element = $compile('<item value="\'hey\'" index="\'0\'"></item>')(scope);
			var controller = element.controller('item');

			scope.$apply();

			var spy = sinon.spy(controller, 'deleteItem');

			element.find('md-button').triggerHandler('click');

			expect(spy.callCount).to.equal(1);

			done();
		});
	});
});