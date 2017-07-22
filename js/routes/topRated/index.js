angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topRated', {
        templateUrl: './js/routes/topRated/template.html',
        controller: 'TopRatedController'
      })
  })
