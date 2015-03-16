"use strict";
var app = angular.module('platfone', ['ui.router', 'firebase']);
// UI Route
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'loginCtrl'
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "partials/signup.html",
      controller: 'signupCtrl'
    })
    .state('company', {
    	url: "/company/:id",
    	templateUrl: "partials/company.html",
      controller: 'postCtrl'
    });

  $urlRouterProvider.otherwise("/");
}]);

app.filter('sortByTime', function() {
  return function(items) {
    return items.slice().sort(function (element1, element2) {
      return element2.createAt - element1.createAt;
    });
  };
});