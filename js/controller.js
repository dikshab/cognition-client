var cognitionControllers = angular.module('cognitionControllers', []);

cognitionControllers.controller('homeController', ['$scope', '$http', function($scope, $http){
	$scope.onSearch = function(){
		var target = $scope.searchTerm;

		window.location = "/#/search/" + target;
		window.location.reload();
	}

	$scope.onUpload = function(){
		//jQuery Stuff - DONT DO THIS IN PRODUCTION (BAD!!!)
		$scope.selectedFile = $('input[type="file"]').click();
	};
}]);

cognitionControllers.controller('searchController', ['$scope', '$http', function($scope, $http){

}]);