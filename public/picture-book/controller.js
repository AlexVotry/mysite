'use strict';

(function() {

  angular
  .module('pictureBook')
  .controller('PicBookController', PicBookController);

  function PicBookController (albumService) {
    var vm = this;
    var flipped = false;
    var pictures = {};
    var slides = [];
    vm.slides = slides;

    albumService.getPics().then(data => {
      pictures = data;
      var total = pictures.length - 1;
      for (var i = total; i >= 0; i--) {
        if(i === total) {
          slides.push({ image: pictures[i].picture, text: "thanks for looking"});
        } else {
          slides.push({ image: pictures[i].picture, text: pictures[i + 1].caption });
        }
      }
    });

    vm.advance = function(index) {
      albumService.advance(index);
    }

    vm.goBack = function(index) {
      albumService.goBack(index);
    }
  };

})();
