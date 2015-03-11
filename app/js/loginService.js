/*jshint strict:false */
(function () {
	function loginService ($firebaseObject) {
		var self = this;
		self.version = "0.0.1";
	}

	angular
		.module('platfone')
		.service('loginService', ['$firebaseObject', loginService]);
})();
