const trendingGif = ($http) => () => {
	return $http.get(
		'//api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100'
	)
	.then(r => {
		const gif = r.data.data[Math.floor(Math.random()*100)];
		return gif.images.downsized.url;
	});
}

const randomGif = ($http) => (tags) => {
	return $http.get(
		`//api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tags}`
	)
	.then(r => {
		const gif = r.data.data;
		return gif.fixed_height_downsampled_url;
	});
}

export default angular
	.module('app.services.giphy', [])
	.factory('giphyAPI', function($http) {
		"ngInject";

		return { 
			trendingGif: trendingGif($http),
			randomGif: randomGif($http)
		};
	});

