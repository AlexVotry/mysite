'use strict';

(function() {

  var pictureBook = {
    templateUrl: ''
  }

  angular
  .module('pictureBook', ['ui.bootstrap', 'ngAnimate'])
  .component('pictureBook', {
    templateUrl: 'picture-book/partial.html',
    controller: PicBookController,
    controllerAs: 'turn'
  })
  .controller('PicBookController', PicBookController);

  function PicBookController () {
    var vm = this;
    var flipped = false;
    var slides = vm.slides = [];
    var picture = ['images/finger.jpg', 'images/leaderJersey.jpg', 'images/Vol2015_3.jpg', 'images/TeamPursuitGold.jpg' ];
    var caption = ['Nice image','Awesome photograph','That is so cool','I love that'];

    (vm.showSlide = function() {
      for (var i = 0; i < picture.length; i++) {
        slides.push({ image: picture[i], text: caption[i] });
      }
    })();

    vm.advance = function(index) {
      var currentPic = '.pic' + index;
      var z = picture.length - index;
    $('.pic'+ index).parent().addClass('flip').css({ 'z-index': z });
    }

    vm.goBack = function(index) {
      var currentPic = '.pic' + (index - 1);
      $('.pic'+ (index - 1)).parent().removeClass('flip').css({ 'z-index': index });
    }
  };

})();
