'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('cvCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("/data/cv.json")
      .success(function(data, status, headers, config) {
        $scope.cv = data;
      })
      .error(function(data, status, headers, config) {
        // log error
      });
  });
