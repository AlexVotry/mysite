'use strict';

(function() {

  angular
  .module('mysite')
  .directive('starWars', starWars);

  function starWars() {
    return {
      restrict: 'E'
      , templateUrl: 'starwars/partial.html'
    }
  }

})();
