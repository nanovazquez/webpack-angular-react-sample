webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var appConfig = __webpack_require__(3);

	angular.module('app', ['ui.router']).constant('BASE_PATH', '/component1').config(appConfig.routeConfig);

	// Load all controllers
	var controllers = __webpack_require__(4);
	controllers.keys().forEach(controllers);

	angular.element(document).ready(function () {
	  angular.bootstrap(document.getElementById('component1'), ['app']);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var routeConfig = ['$stateProvider', '$locationProvider', 'BASE_PATH', configRoutes];

	function configRoutes($stateProvider, $locationProvider, BASE_PATH) {
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: BASE_PATH + '/app/views/home.html',
	    controller: 'HomeController'
	  }).state('about', {
	    url: '/about',
	    templateUrl: BASE_PATH + '/app/views/about.html',
	    controller: 'AboutController'
	  }).state('contact', {
	    url: '/contact',
	    templateUrl: BASE_PATH + '/app/views/contact.html',
	    controller: 'ContactController'
	  });

	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });
	}

	module.exports = {
	  routeConfig: routeConfig
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AboutController.js": 5,
		"./ContactController.js": 6,
		"./HomeController.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('app').controller('AboutController', ['$scope', function ($scope) {
	  $scope.message = 'About page';
	}]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('app').controller('ContactController', ['$scope', function ($scope) {
	  $scope.message = 'Contact page';
	}]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('app').controller('HomeController', ['$scope', function ($scope) {
	  $scope.message = 'Home page for angular ' + angular.version.full;
	}]);

/***/ }
]);