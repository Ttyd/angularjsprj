/**
 * Created by Iauto001 on 2017/10/27.
 */
var app=angular.module('myurlapp',[]);
app.controller('appctrl',function($scope,$location,$http,$timeout ,$interval ,setcustom){
    $scope.myurl=$location.absUrl();
    /*http服务向服务器发送请求，应用相应服务器传送回来的数据*/
   /*$http.get("returndata.html").then(function(response){
        $scope.mywelcom=response.data;
    })*/
    $scope.list=[];
  /*  $http.get("getmethod.json").then(function(response){
        $scope.list=response.data;
    })*/
    $http({method:"get",url:"getmethod.json"}).then(function(response){
        $scope.list=response.data;
    })
    var text={'textcont':'post过来的内容'};
    $http.post('geturl.php',text).success(function(data){
        console.log(data.data);
    })

    $scope.content ='等待两秒种';
    $timeout(function(){
        $scope.content ='哎呀，数值改变啦';
    },2000);
    $scope.nowtime=new Date().toLocaleTimeString();

    $interval(function(){
        $scope.nowtime=new Date().toLocaleTimeString();
    },1000);
    $scope.togetstring=setcustom.cus(3);

})
/*
app.controller('appctrl',function($scope,$http){
    $http.get("returndata.html").then(function (response){
        $scope.mywelcom=response.data;
    })
})*/
app.service('setcustom',function(){
    this.cus=function(x){
        return x.toString(2);
    }
});
