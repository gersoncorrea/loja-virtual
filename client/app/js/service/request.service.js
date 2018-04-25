
angular.module('api').service('ProductService', function($http,$q) {
    return{
        getAll: function(){
            return  $http.get("http://localhost:8080/api/product",).then(
                function(res){
                    return res.data;
                },
                function(err){
                    return err
                }
            );
        },
        getOne: function(id){
            var deferred = $q.defer();
            return  $http.get("http://localhost:8080/api/product/" + id).then(
                function(res){
                    return res.data
                },
                function(err){
                    return $q.reject(err)                    
                }
            ); 
        },
        create: function(data){
            return  $http.post("http://localhost:8080/api/product",data).then(
                function(res){
                    return res.data;
                },
                function(err){
                    return err
                }
            );
        },

        update: function(id,data){
            return  $http.put("http://localhost:8080/api/product/" + id,data).then(
                function(res){
                    return res.data;
                },
                function(err){
                    return err
                }
            );
        },
        delete: function(id){
            return  $http.delete("http://localhost:8080/api/product/" + id).then(
                function(res){
                    console.log(res)
                    return res.status;
                },
                function(err){
                    console.log(err)
                    return err
                }
            );        }
    }
});