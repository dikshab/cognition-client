var app = angular.module('Cognition', ['ngRoute', 'cognitionControllers']);

app.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "pages/home.html",
				controller: "homeController"
			})
			.when('/search/:searchParam',{
				templateUrl:"pages/search.html",
				controller: "searchController"
	});
}]);

