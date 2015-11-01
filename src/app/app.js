var app = angular.module('SpecialApp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'app/views/special/form.html',
        controller: 'SpecialCtrl',
        controllerAs: 'special'
    })
    .otherwise({
        templateUrl: 'app/views/404.html',
    });
  $locationProvider.html5Mode({
      enabled: true
  });
}]);
