angular.module('movieApp')

    .controller('PopularMoviesController', function ($scope, PopularMovieService) {
        // var thumbnailHtml = ''

      PopularMovieService.getPopularMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results
                // response.data.results.forEach(function(movies){
                //     $scope.title = movies.original_title
                //     $scope.dateOfRealise = movies.release_date
                // })
                // $scope.title = response.data.results[0].original_title
                // $scope.dateOfRealise = response.data.results[0].release_date
                // $scope.popularmovies = response.data.results["0"].poster_path
            })
    })
