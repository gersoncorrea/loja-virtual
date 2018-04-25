angular.module('api', [ 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/', {
		templateUrl: '../partials/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/cadastrar', {
		templateUrl: '../partials/cadastrar.html',
		controller: 'CadastrarController'
	});

	$routeProvider.when('/produto/:id', {
		templateUrl: '../partials/cadastrar.html',
		controller: 'EditProdutoController'
	});

	$routeProvider.otherwise({ redirectTo: '/'});

});