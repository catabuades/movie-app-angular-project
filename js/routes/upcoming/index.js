angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upcoming', {
        templateUrl: './js/routes/upcoming/template.html',
        controller: 'UpComingMovieController'
      })
  })
