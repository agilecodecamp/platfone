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
      templateUrl: "partials/login.html"
    })
    .state('company', {
    	url: "/company/:id",
    	templateUrl: "partials/company.html",
      controller: 'postCtrl'
    });

  $urlRouterProvider.otherwise("/");
}]);
