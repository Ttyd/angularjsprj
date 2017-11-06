/**
 * Created by Iauto001 on 2017/10/12.
 */
var app1=angular.module('moduleapp',[])
app1.controller('MyController',function($scope){
        $scope.username='hehe';
        $scope.sayHello=function(){
            $scope.greet="你好"+$scope.username+'!';
        };

    });
