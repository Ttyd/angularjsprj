/**
 * Created by Iauto001 on 2017/10/23.
 */
window.onload=function() {
    'use strict';
    var scope = {
        increase: function(){
            this.data++;
        },
        decrease:function(){
            this.data--;
        },
        data:0

        }

};
angular.module('myapp',[])
.controller('appctrl',function($scope){
    $scope.stylectrl={
        "height":"30px",
        "line-height":"30px",
        "background-color":"pink"
    }
    $scope.imgsrcstyle={
        "border":"1px solid #aaa",
        "box-shadow":'3px 3px 3px #ddd'

    };
    $scope.divstyle={
        "text-align":"center"
    }
    $scope.product={
        "name":'鹦鹉',
        "age":"4周",
        "imgsrc":"../img/99.jpg"
    }
    $scope.names=[
        {"name":"ab","sub":"2"},
        {"name":"da","sub":"1"},
        {"name":"bb","sub":"3"}
    ]
})