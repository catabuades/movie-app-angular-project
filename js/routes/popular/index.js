angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: './js/routes/popular/template.html',
        controller: 'PopularMoviesController'
      })
  })
