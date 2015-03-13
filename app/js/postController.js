/*jshint strict:false */
(function () {
	var app = angular.module('platfone');
	app.controller('postCtrl', ['$scope', 'postFactory', function ($scope, postFactory) {

		$scope.postList = postFactory.getPostList();

		// click event for post
		$scope.doPost = function (messages) {
			postFactory.addPost({
				messages: messages
			});
			$scope.content = '';
		};
	}]);
})();
