/*jshint strict:false */
(function() {
	var app = angular.module('platfone');
	app.controller('signupCtrl', ['$scope', '$firebaseAuth', '$state', function($scope, $firebaseAuth, $state) {
		var userRef = new Firebase('https://platfone.firebaseio.com/');
		var authObject = $firebaseAuth(userRef);

		console.log($state);

		$scope.account = '';
		$scope.password = '';

		$scope.doRegister = function(account, password) {
			if (!account || !password) {
				console.log(account, password);
				return;
			}

			authObject
				.$createUser({
					email: account,
					password: password
				})
				.then(function(userData) {
					return authObject.$authWithPassword({
						email: account,
						password: password
					});
				}).then(function(authData) {
					$state.go('home');
				}).catch(function(error) {
					console.error("Error: ", error);
					if (error.code === "EMAIL_TAKEN") {
						authObject.$authWithPassword({
							email: account,
							password: password
						});
						$state.go('home');
					}
				});
		};

	}]);
})();