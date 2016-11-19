'use strict';

(function() {

  angular
  .module('pictureBook')
  .controller('PicBookController', PicBookController);

  function PicBookController (albumService) {
    var vm = this;
    var flipped = false;
    vm.slides = [];

    albumService.getSlides().then( slides => {
      vm.slides = slides;
    });

    vm.advance = function(index) {
      var currentPic = '.pic' + index;
      var previous = '.pic' + (index + 1);
      var z = vm.slides.length - index;
      $(currentPic).parent().addClass('flip').css({ 'z-index': z });
    }

    vm.goBack = function(index) {
      var currentPic = '.pic' + (index - 1);
      $('.pic'+ (index - 1)).parent().removeClass('flip').css({ 'z-index': index });
    }
  };

})();
