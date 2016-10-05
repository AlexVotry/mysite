'use strict';

(function() {

  angular
  .module('mysite', ['ngRoute'])
  .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'parallax/view.html'
      , contorllerAs: 'starWars'
      , controller: 'StarWarsController'
    })
    .when('/parallax', {
      templateUrl: 'parallax/view.html'
      // , controllerAs: 'parallax'
      // , controller: 'ParallaxController'
    })
  };

})();
