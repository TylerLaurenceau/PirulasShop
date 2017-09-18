function Config($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('products', {
    url: "/products",
    templateUrl: 'templates/products.tpl.html',
    controller: 'productPageController as productPageController'
  })
}

Config.inject = ['$stateProvider', '$urlRouterProvider']
export default Config
