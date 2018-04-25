angular.module('api').controller('HomeController', function($scope,$http,$filter, ProductService) {
    $scope.produto = {}
    $scope.pager = {}

    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.q = '';

    init();

    /**
     * Retrieve product
     */
    function init(){
        ProductService.getAll().then(function(data){
            $scope.produto = data;
        });
    }

    $scope.getData = function () {
        return $filter('filter')( $scope.produto, $scope.q)   
      }

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }

    /**
     * Remove object
     * @param {*} id 
     */
    $scope.remover = function(id){
        ProductService.delete(id); 
        init();  
    }
});

/**
 * Customize filter
 */
angular.module('api').filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});