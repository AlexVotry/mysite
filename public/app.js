'use strict';

(function() {

  angular
  .module('mysite', ['parallax', 'sWars', 'pictureBook', 'email', 'ngRoute'])
  .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'parallax/view.html'
    })
  };

})();
