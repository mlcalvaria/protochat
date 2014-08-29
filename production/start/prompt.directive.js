startModule.directive('prompt',function(MessageService,purr){

    return{

        restrict: 'E',
        scope: false,
        link: function(scope,element,attrs){

            // Nachrichten durch Enter senden
            function postOnEnter(e){

                var message = MessageService.createMessage();

                if(!message.value){
                    purr.error('Kein Inhalt');
                    return;
                }

                if(e.keyCode == 13){
                    scope.$apply(function(){
                        scope.addMessage(message);
                    });
                }

            }

            element.bind('keydown',postOnEnter);

        }

    }

});