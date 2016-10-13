const fetchCATUrl = ($http) => () => {
	return $http.get(
		'http://thecatapi.com/api/images/get?api_key=MTI0ODgx&format=xml'
	)
	.then(r => {
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(r.data, "text/xml");
		return xmlDoc.getElementsByTagName('url')[0].innerHTML;
	});	
}

export default angular
	.module('app.services.catAPI', [])
	.factory('catAPI', function($http) {
		"ngInject";
		
		return fetchCATUrl($http);
	});