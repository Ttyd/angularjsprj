/**
 * Created by Iauto001 on 2017/11/1.
 */
    var app=angular.module('yilaiapp',[]);

/*向控制器传入值*/
    app.value('defaultinput',10);

/*创建factory 使用factory函数计算或返回值*/
    app.factory('mathservice',function(){
        var factory={};
        factory.multiply = function(a){
            return a*a;
        }
        return factory;
    });

/*在service中注入factory*/
    app.service('CalcService',function(mathservice){
        this.square=function(a){
            if(a){
                return '正方形的面积是：'+mathservice.multiply(a);
            }
            else{
                return '请输入正方形的长度';
            }

        }
    })
    app.controller('yilaictrl',function($scope,CalcService){
        /*$scope.numbershow=defaultinput;*/
        $scope.$watch("numbershow",function(){
            $scope.result=CalcService.square($scope.numbershow);
        })
    })

    app.factory('computarea',function(){
        var factory={};
        factory.areaval=function(a,b){
            return a*b;
        }
        return factory;
    });
    app.service("servicearea",function(computarea){
        this.rectareacom=function(a,b){
            if(a>0 && b>0){
                return '长方形的面积是：'+computarea.areaval(a,b);
            }else if(a>0){
                return "请输入长方形的宽";
            }else if(b>0){
                return "请输入长方形的长";
            }else{
                return "请输入长方形的长和宽";
            }

        }
    })
    app.controller('rectctrl',['$scope','servicearea',function($scope,servicearea){
        $scope.$watch("length + width", function () {
            $scope.rectarea =servicearea.rectareacom($scope.length,$scope.width)
        });
        $scope.rectarea =servicearea.rectareacom($scope.length,$scope.width);
        $scope.computearea=function(){
            $scope.rectarea2 =servicearea.rectareacom($scope.length,$scope.width);
        }
    }])
