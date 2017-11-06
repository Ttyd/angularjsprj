/**
 * Created by Iauto001 on 2017/10/12.
 */
var injectapp = angular.module('injectapp',[])
injectapp.factory('greeter',function($window){
    return {
        greet:function (text){
            $window.alert(text);
        }
    }
});
var injectors = angular.injector(['injectapp','ng']);
var greeter =injectors.get('greeter');
injectapp.controller('mycontroller',function($scope , greeter){
    $scope.sayHello=function(){
        greeter.greet('你好,我的世界之大');
    };
})

injector.instantitate(mycontroller);
