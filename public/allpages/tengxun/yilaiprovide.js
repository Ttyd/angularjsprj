/**
 * Created by Iauto001 on 2017/11/2.
 */

 /*Method1*/
/*var app = angular.module('provideapp',[],function($provide){
    $provide.provider("matharea",function() {
        this.$get = function () {
            var factory = {};
            factory.comparea = function (a, b) {
                if (a > 0 && b > 0) {
                    return '长方形的面积是：' + a*b;
                } else if (a > 0) {
                    return "请输入长方形的宽";
                } else if (b > 0) {
                    return "请输入长方形的长";
                } else {
                    return "请输入长方形的长和宽";
                }
            }
            return factory;
        }
    })
});
app.controller('providectrl',['$scope','matharea',function($scope,matharea){
    $scope.$watch('length + width',function(){
        $scope.rectarea=matharea.comparea($scope.length,$scope.width);
    })

}])*/

/*Method2*/
var app = angular.module('provideapp',[]);
app.config(function($provide){
  $provide.provider('matharea',function(){
      this.$get=function(){
          var factory = {};
          factory.comparea = function (a, b) {
              if (a > 0 && b > 0) {
                  return '长方形的面积是：' + a*b;
              } else if (a > 0) {
                  return "请输入长方形的宽";
              } else if (b > 0) {
                  return "请输入长方形的长";
              } else {
                  return "请输入长方形的长和宽";
              }
          }
          return factory;
      }
  })
})

app.controller('providectrl',['$scope','matharea',function($scope,matharea){
    $scope.$watch('length + width',function(){
        $scope.rectarea=matharea.comparea($scope.length,$scope.width);
    })

}])

app.constant('configparam','这是在constant中定义的常量，显示在页面中的');
app.controller('constantctrl',function($scope,configparam){
    $scope.constanttag=configparam;
})