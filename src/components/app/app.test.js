import chai, { assert, expect } from 'chai';

import '../../../test-helpers';

import './app.component';
import reducers from '../../reducers';

describe('<app />', () => {
	beforeEach(() => {
		ngModule('app.app', $provide => {
			$provide.constant('$ngRedux', {
				connect: () => () => () => true
			});
		});
	});

	it('hello world', () => {
		expect(true).to.equal(true);
	});

	it('main test', (done) => {
		inject(function($rootScope, $compile) {
			var scope = $rootScope.$new();
			var element = $compile('<app></app>')(scope);

			expect(element.find('div').attr('class')).to.equal('container');

			done();
		});
	});
});