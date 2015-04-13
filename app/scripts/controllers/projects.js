/**
 * Created by webdev on 4/3/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("/data/projects.json")
      .success(function(data, status, headers, config) {
        $scope.projects = data;
      })
      .error(function(data, status, headers, config) {
      // log error
    });
  });
