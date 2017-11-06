/**
 * Created by Iauto001 on 2017/10/31.
 */

angular.module('formapps',[])
.controller('formctrl',function($scope,$http){
    $scope.sites=[
        {site:"大专"},
        {site:"本科"},
        {site:"研究生"},
        {site:"博士"}
    ];
    $scope.selected=$scope.sites[0].site;

    $scope.sub=function(){
        console.log('submit')
    }
    $scope.importtag='importfile.html';
    $http.get('importfile.html').then(function(response){
        $scope.secondimportfile=response.data;
    })





})