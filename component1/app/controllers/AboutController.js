var angular = require('angular');

angular
  .module('app')
  .controller('AboutController', ['$scope', function ($scope) {
    $scope.message = 'About page';
  }])
;