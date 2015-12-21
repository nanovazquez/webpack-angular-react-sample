var angular = require('angular');

angular
  .module('app')
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.message = 'Home page for angular ' + angular.version.full;
  }])
;