/*jshint strict:false */
(function () {
	var app = angular.module('platfone');
	app.factory('firebaseFactory', ['$firebaseArray', function ($firebaseArray) {
		var url = 'https://platfone.firebaseio.com/';

		function init (Name) {
			if (typeof Name === 'undefined')
				Name = '';
			if (typeof Name === 'string')
				Name = [Name];
			var path = Name.join('/');
			var ref = new Firebase(url + path);
			var data = $firebaseArray(ref);
			return data.$loaded();
		}
	
		return {
			init: init
		};
	}]);
})();