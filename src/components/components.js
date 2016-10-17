import 'angular';

import appComponent from './app/app.component';
import fooComponent from './foo/foo.component';
import listComponent from './list';
import itemComponent from './item/item.component';
import editComponent from './edit/edit.component';
import catComponent from './cat/cat.component';

export default angular
  .module('app.components', [
	appComponent.name,
	fooComponent.name,
	listComponent.name,
	itemComponent.name,
	editComponent.name,
	catComponent.name
  ]);