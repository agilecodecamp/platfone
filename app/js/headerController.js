/*jshint strict:false */
(function() {
	var app = angular.module('platfone');
	app.controller('headerCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
		var userRef = new Firebase('https://platfone.firebaseio.com/');
		var authObject = $firebaseAuth(userRef);

		authObject.$onAuth(function (authData) {
			$scope.currentUser = authData;
		});

		$scope.doLogout = function () {
			authObject.$unauth();
		};
	}]);
})();