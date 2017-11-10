/**
 * Created by Iauto001 on 2017/10/13.
 */
var app=angular.module('myapp',[]);

    app.controller('appctrl',function($scope){
        $scope.customer = {
            name:'maoni',
            address:'beijing 13234'
        };
        $scope.daxie='XiaoXieXiMu'
        $scope.daxie=angular.uppercase($scope.daxie);
        $scope.xiaoxie=angular.lowercase($scope.daxie);
        $scope.a={age:12};
        $scope.b={name:"aaa"};
        $scope.jicheng=angular.toJson(angular.extend($scope.daxie,$scope.xiaoxie))
        console.log(angular.extend($scope.b,$scope.a))
        console.log(angular.toJson(angular.extend($scope.b,$scope.a),true))

        var obj={ name:'maoni',address:'beijing 13234'};
        var result=[];
        angular.forEach(obj,function(val,key){
            this.push(key+';'+val);
        },result)
        console.log(result)

    });
   app.directive('myCustomer',function(){
        return {
            template:'姓名：  地址：'
        };
    });
app.controller('filterctrl',[ 'filterFilter',function(filterFilter){
    this.array=['31aa','13AA','14bB'];
    this.filterarray=filterFilter(this.array,'1');

}])
app.filter('reverse',function(){
    return function (array,uppercase){
        array=array || '';
        var out ='';
        for(var i=0;i<array.length;i++){
            out=array.charAt(i)+out
;        }
        if(uppercase){
            out=out.toUpperCase();
        }else{
            out.toLowerCase();
        }
        return out;
    }
})
    function test($scope){

    }
app.controller('test',test);
app.filter("fullname",function(){

  var filterfun =  function(person,sep) {
      sep = sep || '';
      person = person || { };
      person.first = person.first || '';
      person.last = person.last || '';
      return person.first + sep + person.last;
  };
    return filterfun;

})