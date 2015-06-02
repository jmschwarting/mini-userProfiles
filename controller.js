var app = angular.module('userProfiles');

app.controller('MainCtrl', function($scope, mainService){

	$scope.test = mainService.data;


	var getUsers = function () {
		$scope.users = mainService.getUsers();
	}

	getUsers();

});