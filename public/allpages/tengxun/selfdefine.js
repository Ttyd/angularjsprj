/**
 * Created by Iauto001 on 2017/10/30.
 */
var app=angular.module('custom',[]);
/*双向绑定一 ：view改变 model改变*/


/*自定义方法*/
app.service('setcustom',function(){
    this.cus=function(x){
        return x.toString(2);
    }
});

app.controller('setservice',function($scope,setcustom,$interval){
    /*监听watch*/
    $scope.$watch("cont",function(){
        $scope.togetstring=setcustom.cus($scope.cont);
    })
    /*双向绑定二 ： model改变 view改变*/
    $scope.myswitch=false;
    $scope.clickcont='点击我一下';
    $scope.checkbtn=false;
    $scope.clickfun=function(){
        $scope.clickcont=5;
        $scope.checkbtn=true;
       var intervalstop= $interval(function(){
            if($scope.clickcont>1){
                   --$scope.clickcont;
            }else{
                $interval.cancel(intervalstop);
                $scope.clickcont='点击我一下';
                $scope.checkbtn=false;
            }
       },1000)
    }
});
