startModule.directive('prompt',function(MessageService,purr){

    return{

        restrict: 'A',
        scope: false,
        link: function(scope,element,attrs){

            // Nachrichten durch Enter senden
            function postOnEnter(e){

                var message = MessageService.createMessage();

                if(e.which == 13 && e.ctrlKey){

                    e.preventDefault();

                    scope.$apply(function(){
                        scope.addMessage(message);
                    });
                }

            }

            element.bind('keydown',postOnEnter);

        }

    }

});