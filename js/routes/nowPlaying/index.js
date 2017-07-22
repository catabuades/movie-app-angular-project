angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/nowPlaying', {
        templateUrl: './js/routes/nowPlaying/template.html',
        controller: 'NowPlayingMovieController'
      })
  })
