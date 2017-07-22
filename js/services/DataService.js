angular.module('movieApp', [])

    .factory('PopularMovieService', function ($http) {
      function getPopularMovie ()  {
        var url = 'http://api.themoviedb.org/3/discover/movie?api_key=eb3774bb93404d76b82e0ef0d6c618d7'
        return $http.get(url)
        console.log(url)
      }
      return {
        getPopularMovie: getPopularMovie
      }
    })

    .factory('MovieImageService', function ($http) {
      function getImage () {
        var url = 'https://image.tmdb.org/t/p/w500'
      }
    })

    .factory('UpComingMovieService', function ($http) {
      function getUpComingMovie () {
        var url = 'http://api.themoviedb.org/3/movie/upcoming?api_key=eb3774bb93404d76b82e0ef0d6c618d7'
        return $http.get(url)
        console.log(url)
      }
      return {
        getUpComingMovie: getUpComingMovie
      }
    })

    .factory('NowPlayingMovieService', function ($http) {
      function getNowPlayingMovie () {
        var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=eb3774bb93404d76b82e0ef0d6c618d7'
        return $http.get(url)
        console.log(url)
      }
      return {
        getNowPlayingMovie: getNowPlayingMovie
      }
    })

    .factory('TopRatedMovieService', function ($http) {
      function getTopRatedMovie () {
        var url = 'http://api.themoviedb.org/3/movie/top_rated?api_key=eb3774bb93404d76b82e0ef0d6c618d7'
        return $http.get(url)
        console.log(url)
      }
      return {
        getTopRatedMovie: getTopRatedMovie
      }
    })
