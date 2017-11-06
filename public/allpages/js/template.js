/**
 * Created by Iauto001 on 2017/10/13.
 */
var app=angular.module('myapp',[]);
    app.controller('ctrll',function($scope){
        $scope.customer = {
            name:'maoni',
            address:'beijing 13234'
        };

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