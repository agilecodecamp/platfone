/*jshint strict:false */
(function () {
	var app = angular.module('platfone');
	app.controller('loginCtrl', ['$scope', '$firebaseAuth', '$state', function ($scope, $firebaseAuth, $state) {
		var userRef = new Firebase('https://platfone.firebaseio.com/');
		var authObject = $firebaseAuth(userRef);

		$scope.doLogin = function (account, password) {
			authObject.$authWithPassword({
				email: account,
				password: password
			})
			.then(function (authData) {
				$state.go('home');
			})
			.catch(function (error) {
				console.error("Error: ", error);
			});
		};

	}]);
})();
