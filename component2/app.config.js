routing.$inject = ['$stateProvider', '$locationProvider', 'BASE_PATH'];

export default function routing($stateProvider, $locationProvider, BASE_PATH) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: BASE_PATH + '/app/views/home.html',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      templateUrl : BASE_PATH + '/app/views/about.html',
      controller  : 'AboutController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl : BASE_PATH + '/app/views/contact.html',
      controller  : 'ContactController'
    })
  ;

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}