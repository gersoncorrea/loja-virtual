angular.module('api').controller('CadastrarController', function($scope,$q, $http, $routeParams,ProductService) {
    $scope.title = "Cadastrar"
     $scope.form = {}

    $scope.salvar = function(){ 
        var obj = {
            title:$scope.form.title,
            description:$scope.form.description,
        }
        ProductService.create(obj);
    }
});