(function(){    

  angular.module('products', []);
  angular.module('testApp', ['ui.router', 'ngResource', 'products']);

  angular.module('testApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('products', {
          abstract: true,
          template: '<ui-view/>'
        })
          .state('products.list', {
            url: '/',
            templateUrl: '/app/views/products/index.html',
            controller: 'productsController'
          })
          .state('products.new', {
            url: '/products/new',
            templateUrl: '/app/views/products/new.html',
            controller: 'productsNewController'
          })
          .state('products.show', {
            url: '/products/:id',
            templateUrl: '/app/views/products/show.html',
            controller: 'productsShowController'
          })
          .state('products.edit', {
            url: '/products/:id/edit',
            templateUrl: '/app/views/products/edit.html',
            controller: 'productsEditController'
          }
        );
    }
  ])
  .run(function($state) {
  });

})(); 
