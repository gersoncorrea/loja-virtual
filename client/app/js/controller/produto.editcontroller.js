angular.module('api').controller('EditProdutoController', function($scope,$q, $http, $routeParams, ProductService) {
    $scope.title = "Editar"
     $scope.form = {}
    var obj = ProductService.getOne($routeParams.id).then(function(data){
        $scope.form.title = data.title,
        $scope.form.description = data.description     
    })
    $scope.salvar = function(){
        var obj = {
            title:$scope.form.title,
            description:$scope.form.description,
        }
        ProductService.update($routeParams.id, obj);
    }
});