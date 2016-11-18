'use strict';

(function() {

  angular.module('parallax')
  .directive('group1', group1)
  .directive('group2', group2)
  .directive('group3', group3)
  .directive('group4', group4)
  .directive('group5', group5)
  .directive('siteInfo', siteInfo)
  .directive('meNow', meNow)
  .directive('mePast', mePast)
  ;

  function group1() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.group1.html'
    }
  }
  function group2() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.group2.html'
    }
  }
  function group3() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.group3.html'
    }
  }
  function group4() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.group4.html'
    }
  }
  function group5() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.group5.html'
    }
  }
  function siteInfo() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.site_info.html'
    }
  }
  function meNow() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.me_now.html'
    }
  }
  function mePast() {
    return {
      restrict: 'E'
      , templateUrl: 'parallax/partial.me_past.html'
    }
  }

})();
