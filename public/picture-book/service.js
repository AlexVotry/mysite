'use strict';

(function() {
  angular.module('pictureBook')
  .factory('albumService', albumService);

  function albumService($http, $q) {
    var slides = [];

    function getPics() {
      return $http.get('../pictures.json')
        .then( pictures => {
          return pictures.data;
      });
    }

  function getSlides() {
    getPics().then(pictures => {
      var total = pictures.length - 1;
      for (var i = total; i >= 0; i--) {
        if(i === total) {
          slides.push({ image: pictures[i].picture, text: "Ready for what's next!"});
        } else {
          slides.push({ image: pictures[i].picture, text: pictures[i + 1].caption });
        }
      }
    });
    return $q((resolve, reject) => {
      resolve(slides);
    });
  }

    return {
      getSlides: getSlides
    }
  }

})();
