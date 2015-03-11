'use strict';
var app = angular.module('dreamBoard', ['ui.router']);
// UI Route
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state('company', {
    	url: "/company/:id",
    	templateUrl: "partials/company.html"
    });

  $urlRouterProvider.otherwise("/");
}]);
