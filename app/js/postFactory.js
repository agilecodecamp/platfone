/*jshint strict:false */
(function () {
	var app = angular.module('platfone');
	
	app.factory('postFactory', ['$firebaseObject', function ($firebaseObject) {
		
		var postList = [];

		for (var i = 0 ; i < 10 ; i++) {
			postList.push({
				messages: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem vero earum voluptatum, eos natus nam distinctio nulla cum quibusdam, explicabo odio numquam magnam ea doloribus obcaecati ipsum aut cumque!"
			});
		}

		function getPostList () {
			return postList;
		}

		function addPost (post) {
			postList.unshift(post);
			console.log(postList.length);
		}
	
		return {
			getPostList: getPostList,
			addPost: addPost
		};
	}]);
})();