'use strict';

(function() {

  angular
  .module('email')
  .component('emailService', {
    templateUrl: 'email/partial.html',
    controller: EmailController,
    controllerAs: 'pop'
  })
  .controller('EmailController', EmailController);

  function EmailController () {
    var vm = this;
  }
})();
