/**
 * Created by Iauto001 on 2017/10/13.
 */
 var app = angular.module('formapp',[]);
    app.controller('formcontroller',function($scope){
        $scope.master={};

        $scope.update=function(){
            $scope.master=angular.copy($scope.user);
        }
        $scope.reset=function(){
            $scope.user=angular.copy($scope.master);
        }
        $scope.reset();
        $scope.price=9.99;

    })
/*正则判断年龄范围*/
var INTEGER_REGEXP =  /^\-?\d+$/;
app.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
                    // 验证通过
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
                    // 验证不通过 返回 undefined (不会有模型更新)
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});


app.directive('contenteditable',function(){
    return {
        require:'ngModel',
        link:function(scope , elm , attrs , ctrl){
            elm.on('blur',function(){
                scope.$apply(function(){
                    ctrl.$setViewValue(elm.html());
                })
            })
            ctrl.$render = function(){
                elm.html(ctrl.$viewValue);
            };
            ctrl.$setViewValue(elm.html());

        }
    }
})
