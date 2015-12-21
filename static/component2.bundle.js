webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(8);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _appConfig = __webpack_require__(9);

	var _appConfig2 = _interopRequireDefault(_appConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('app2', [_angularUiRouter2.default]).constant('BASE_PATH', '/component1').config(_appConfig2.default);

	// Load all controllers
	var controllers = __webpack_require__(10);
	controllers.keys().forEach(controllers);

	_angular2.default.element(document).ready(function () {
	  _angular2.default.bootstrap(document.getElementById('component2'), ['app']);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	routing.$inject = ['$stateProvider', '$locationProvider', 'BASE_PATH'];

	function routing($stateProvider, $locationProvider, BASE_PATH) {
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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AboutController.js": 11,
		"./ContactController.js": 12,
		"./HomeController.js": 13
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
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AboutController = function AboutController() {
	  _classCallCheck(this, AboutController);

	  this.message = 'About page';
	};

	exports.default = AboutController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContactController = function ContactController() {
	  _classCallCheck(this, ContactController);

	  this.message = 'Contact page';
	};

	exports.default = ContactController;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeController = function HomeController() {
	  _classCallCheck(this, HomeController);

	  this.message = 'Home page for angular ' + angular.version.full;
	};

	exports.default = HomeController;

/***/ }
]);