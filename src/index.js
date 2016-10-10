import 'angular';

import ngRedux from 'ng-redux';
import ngMaterial from 'angular-material';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import mySaga from './sagas';
import Components from './components/components';

const sagaMiddleware = createSagaMiddleware()

angular.module('app', [
	Components.name,
	ngRedux,
	ngMaterial,
	mySaga.name
])
.config(($ngReduxProvider) => {
	$ngReduxProvider.createStoreWith(reducers, 
		[sagaMiddleware], 
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? [
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
		]: null);
})
.run(($ngRedux, sagas) => {
	sagaMiddleware.run(sagas.mySaga);
});