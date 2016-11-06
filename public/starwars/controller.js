'use strict';

( function() {

  angular.module('sWars')
  .controller('SWController', SWController);

  function SWController() {

    $( "div.apps" ).hover(function() {
      $( this ).removeClass("apps").addClass("afterHover");
    });
  };
})();
