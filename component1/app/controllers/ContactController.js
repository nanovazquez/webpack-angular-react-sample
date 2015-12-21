var angular = require('angular');

angular
  .module('app')
  .controller('ContactController', ['$scope', function ($scope) {
    $scope.message = 'Contact page';
  }])
;