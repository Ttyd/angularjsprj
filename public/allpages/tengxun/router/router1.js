/**
 * Created by Iauto001 on 2017/11/3.
 */

angular.module('routerapp',['ngRoute'])
    .controller('homectrl',function($scope,$route){
        $scope.$route=$route;
    })
    .controller('aboutctrl',function($scope,$route){
        $scope.$route=$route;
    })
    .config(function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'route2.html',
                controller:'homectrl'
            })
            .when('/about',{
                templateUrl:'route3.html',
                controller:'aboutctrl'
            })
            .otherwise({
                redirectTo:'/home'
            });
    });