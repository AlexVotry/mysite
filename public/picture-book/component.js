'use strict';

(function() {

  angular
  .module('pictureBook')
  .component('pictureBook', {
    templateUrl: 'picture-book/partial.html',
    controller: 'PicBookController',
    controllerAs: 'turn'
  });

})();
