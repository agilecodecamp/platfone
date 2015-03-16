/*jshint strict:false */
(function () {
	var app = angular.module('platfone');
	app.controller('postCtrl', ['$scope', 'firebaseFactory', function ($scope, firebaseFactory) {

		$scope.postList = [];

		firebaseFactory
			.init('Post')
			.then(function (currentData) {
				$scope.postList = currentData;
			}, function () {
				console.error('Post init fail', arguments);
			});

		// click event for post
		$scope.doPost = function (content) {
			$scope.postList.$add({
				message: content,
				createAt: Date.now()
			});
			$scope.content = '';
		};
	}]);
})();
