startModule.directive('prompt',function(MessageService){

    return{

        restrict: 'A',
        scope: false,
        link: function(scope,element,attrs){

            element.bind('keydown',postOnEnter);

            function postOnEnter(e){

               if(e.which == 13 && !e.ctrlKey && !e.shiftKey){

                    e.preventDefault();

                    scope.$apply(function(){
                        scope.addMessage();
                    });
                }

            }

        }

    }

});