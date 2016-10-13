'use strict';

(function() {

  angular
  .module('sWars', [])
  .directive('starWars', starWars);

  function starWars() {
    return {
      restrict: 'E'
      , templateUrl: 'starwars/partial.html'
    }
  }

})();
