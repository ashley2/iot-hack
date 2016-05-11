'use strict';

var app = angular.module('gardenApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state('splash', {
    url: "/",
    templateUrl: "templates/splash.html",
    controller: "splashCtrl"
  }).state('dash', {
    url: "/dash",
    templateUrl: "templates/dash.html",
    controller: "dashCtrl"
  });
}]);