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
'use strict';

angular.module('gardenApp').controller('dashCtrl', ["$scope", function ($scope) {

  angular.element(document).ready(function () {

    var clock = $('.your-clock').FlipClock({
      clockFace: 'TwelveHourClock'

    });
  });
}]);
'use strict';

angular.module('gardenApp').controller('splashCtrl', ["$scope", function ($scope) {}]);