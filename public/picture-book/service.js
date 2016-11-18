'use strict';

(function() {
  angular.module('pictureBook')
  .factory('albumService', albumService);

  function albumService($http, $q) {
    var allPics = [];

    function getPics() {
      if(!allPics.length) {
        return $http.get('../pictures.json')
        .then( data => {
          allPics = data.data;
          return allPics;
        });
      } else {
        return $q((resolve, reject) => {
          resolve(allPics);
        });
      }
    };

    function advance(index) {
      var currentPic = '.pic' + index;
      var previous = '.pic' + (index + 1);
      var z = allPics.length - index;
      $(currentPic).parent().addClass('flip').css({ 'z-index': z });
    }

    function goBack(index) {
      var currentPic = '.pic' + (index - 1);
      $('.pic'+ (index - 1)).parent().removeClass('flip').css({ 'z-index': index });
    }

    return {
      getPics: getPics,
      advance: advance,
      goBack: goBack
    }
  }

})();
