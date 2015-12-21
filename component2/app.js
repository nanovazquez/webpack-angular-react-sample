import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.config.js';

angular
  .module('app2', [uirouter])
  .constant('BASE_PATH', '/component1')
  .config(routes)
;

// Load all controllers
var controllers = require.context('./app/controllers/', true, /\.js$/);
controllers.keys().forEach(controllers);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('component2'), ['app']);
});