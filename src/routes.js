(function(){
  'use strict';

  angular.module('menuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state( 'home', {
      url: '/',
      templateUrl: 'src/data/templates/home.template.html'
    })

    .state( 'categories', {
      url: '/categories',
      templateUrl: 'src/data/templates/home.template.html'
    });

  }

})();
