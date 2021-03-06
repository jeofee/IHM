'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("/data/about.json")
      .success(function(data, status, headers, config) {
        $scope.about = data;
      })
      .error(function(data, status, headers, config) {
        // log error
      });

    $http.get("/data/description.json")
      .success(function(data, status, headers, config) {
        $scope.description = data;
      })
      .error(function(data, status, headers, config) {
        // log error
      });
  });
