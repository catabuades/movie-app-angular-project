angular.module('movieApp')

    .controller('UpComingMovieController', function ($scope, UpComingMovieService) {
        // var thumbnailHtml = ''

      UpComingMovieService.getUpComingMovie()
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
