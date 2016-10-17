import chai, { assert, expect } from 'chai';
import '../../../test-helpers';

import './';

describe('<list />', () => {
	beforeEach(ngModule('app.list'));

	it('display title', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			scope.tab = ['item1', 'item2'];
			var element = $compile('<list items="tab"></list>')(scope);
			var controller = element.controller('list');
			scope.$apply();

			const subHeader = element[0].querySelector('.' + controller.s.titleWithElements);
			const title = subHeader.innerHTML.replace(/^\s+|\s+$/g, '');

			expect(title).to.equal('2 elements');

			done();
		});
	});

	it('display 1 item', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			scope.tab = ['item1'];
			var element = $compile('<list items="tab"></list>')(scope);
			scope.$apply();

			expect(element.find('item').length).to.equal(1);

			done();
		});
	});

	it('display 2 or more items', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			scope.tab = ['item1', 'item2', 'item3', 'item4'];
			var element = $compile('<list items="tab"></list>')(scope);
			scope.$apply();

			expect(element.find('item').length).to.equal(4);

			done();
		});
	});
});