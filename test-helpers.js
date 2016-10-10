
if (process.env.NODE_ENV === 'test_browser') {
	require('angular');
	require('angular-mocks');

	window.ngModule = window.angular.mock.module;
	window.inject = window.angular.mock.inject;	
}
else {
	const jsdom = require('jsdom').jsdom;

	delete require.cache;

	global.document = jsdom('<html><head><script></script></head><body></body></html>');
	global.window = global.document.defaultView;
	global.navigator = window.navigator = {};
	global.Node = window.Node;

	global.window.mocha = {};
	global.window.beforeEach = beforeEach;
	global.window.afterEach = afterEach;

	require('angular/angular');
	require('angular-mocks');

	global.angular = window.angular;
	global.inject = global.angular.mock.inject;
	global.ngModule = global.angular.mock.module;
	global.navigator = window.navigator;
	global.NodeFilter = window.NodeFilter;
}
