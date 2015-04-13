'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  //utilise le rootprovider, de matche et d'inserer la vue avec le controler associé dans ce div là
  //index est chargé automatiquement
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html', //Je veux charger la vue
        controller: 'MainCtrl'          //Je veux charger controller
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl : 'views/projects.html',
        controller : 'ProjectsCtrl'
      })
      .when('/cv', {
        templateUrl : 'views/cv.html',
        controller : 'cvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
