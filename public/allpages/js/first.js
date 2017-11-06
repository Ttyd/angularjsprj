/**
 * Created by Iauto001 on 2017/10/12.
 */
angular.module('invoice1',[])
    .controller('controllerctrl',function(){
        this.price=2;
        this.num=3;
        this.total=function total(price,num){
            return this.price*this.num;
        };


    })
    .directive('draggable',function($document){
        return function (scope,element,attr){
            var startX= 0,startY= 0, x=0,y=0;
            element.css({
                position:'relative',
                border:'1px solid #eee',
                backgroundColor:'blue',
                cursor:'pointer'

            });
            element.on('mousedown', function (event) {
                event.preventDefault();
                startX=event.screenX-x;
                startY=event.screenY-y;
                $document.on('mousemove',mousemove);
                $document.on('mouseup',mouseup);
            });
            function mousemove(event){
                x=event.screenX-startX;
                /*console.log(event.screenX+'::::'+event.clientX)*/
                y=event.screenY-startY;
                element.css({
                    top:y+'px',
                    left:x+'px'
                });
            }
            function mouseup(){
                $document.unbind('mousemove',mousemove);
                $document.unbind('mouseup',mouseup);
            }


        }
    })

