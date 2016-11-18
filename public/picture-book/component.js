'use strict';

(function() {

  // var pictureBook = {
  //   templateUrl: ''
  // }

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
    var picture = ['images/basilica.jpg', 'images/venice.jpg', 'images/jersey.jpg', 'images/prague.jpg', 'images/TeamPursuitGold.jpg', 'images/thai_head.jpg', 'images/elephant.jpg', 'images/parthenon.jpg', 'images/santorini.jpg', 'images/fuji.jpg', 'images/jpn2.jpg', 'images/kimono.jpg', 'images/kid.jpg' ];
    var caption = ['Thanks for looking!', 'basilica', 'venice', 'Leader Jersey', 'Prague', 'TeamPursuitGold', 'Thailand', 'Riding an elephant in Thailand', 'The Parthenon', 'Lost City of Atlantis', 'The top of Mt. Fuji', 'Dinner with friends', 'When in Japan..' ];

    (vm.showSlide = function() {
      for (var i = 0; i < picture.length; i++) {
        slides.push({ image: picture[i], text: caption[i] });
      }
    })();

    vm.advance = function(index) {
      var currentPic = '.pic' + index;
      var previous = '.pic' + (index + 1);
      var z = picture.length - index;
      $(currentPic).parent().addClass('flip').css({ 'z-index': z });
    }

    vm.goBack = function(index) {
      var currentPic = '.pic' + (index - 1);
      $('.pic'+ (index - 1)).parent().removeClass('flip').css({ 'z-index': index });
    }
  };

})();
