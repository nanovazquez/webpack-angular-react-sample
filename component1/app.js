var angular   = require('angular');
var appConfig = require('./app.config.js');

angular
  .module('app', ['ui.router'])
  .constant('BASE_PATH', '/component1')
  .config(appConfig.routeConfig)
;

// Load all controllers
var controllers = require.context('./app/controllers/', true, /\.js$/);
controllers.keys().forEach(controllers);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('component1'), ['app']);
});