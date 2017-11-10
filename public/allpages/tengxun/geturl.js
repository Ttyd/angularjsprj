/**
 * Created by Iauto001 on 2017/10/27.
 */
var app=angular.module('myurlapp',[]);
app.service('setcustom',function(){
    this.cus=function(x){
        return x.toString(2);
    }
});

app.controller('appctrl',function($scope,$location,$http,$timeout ,$interval ,setcustom){
    $scope.myurl=$location.absUrl();
    /*http服务向服务器发送请求，应用相应服务器传送回来的数据*/

    $scope.list=[];
  /*  $http.get("getmethod.json").then(function(response){
        $scope.list=response.data;
    })*/
    $http({method:"get",url:"getmethod.json"}).then(function(response){
        $scope.list=response.data;
    })
    var text={'textcont':'post过来的内容'};
    $http.post('geturl.php',text).then(function(data){
        console.log(data.data);
    })

    $scope.timeoutcontent ='等待两秒种';
    $scope.applycontent ='等待两秒种';
    $timeout(function(){
        $scope.timeoutcontent ='哎呀，数值改变啦这是使用$timeout改变的';
    },2000);

   setTimeout(function(){
       $scope.$apply(function(){
           $scope.applycontent ='这是使用applyf改变的';
       })
   },2000)
    $scope.nowtime=new Date().toLocaleTimeString();

    $interval(function(){
        $scope.nowtime=new Date().toLocaleTimeString();
    },1000);
    $scope.togetstring=setcustom.cus(3);

})
console.log(app);

app.run(['$rootScope',function($rootScope){
    $rootScope.runmethod="我是run方法，只对全局作用域有关"
}])
/*
app.controller('appctrl',function($scope,$http){
    $http.get("returndata.html").then(function (response){
        $scope.mywelcom=response.data;
    })
})*/
