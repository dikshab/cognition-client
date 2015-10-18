var app = angular.module('Cognition', ['ngRoute', 'cognitionControllers']);

app.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "pages/home.html",
				controller: "homeController"
			})
			.when('/404',{
				templateUrl:"pages/404.html",
				controller: "404Controller"
	});
}]);