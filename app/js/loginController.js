"use strict";
var app = angular.module('platfone');
app.controller('loginCtrl', ['$scope', 'loginService', function ($scope, loginService) {
	$scope.doLogin = function () {
		alert("Do Login");
	};
}]);