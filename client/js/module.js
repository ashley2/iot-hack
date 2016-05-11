var app = angular.module('gardenApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('splash', {
    url: "/",
    templateUrl: "templates/splash.html",
    controller: "splashCtrl"
  })
  .state('dash', {
    url: "/",
    templateUrl: "templates/dash.html",
    controller: "dashCtrl"
  })