var cognitionControllers = angular.module('cognitionControllers', []);

cognitionControllers.controller('homeController', ['$scope', '$http', function($scope, $http){

	/* ALL CODE GOES IN THE GET METHOD FOR ASYNC TO WORK*/
	$http.get("https://api.github.com/users/dabockster")
		.success(function(res){
			
		});
}]);