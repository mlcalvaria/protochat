startModule.directive('prompt',function(User,tookit,purr){

    return{

        restrict: 'E',
        scope: false,
        link: function(scope,element,attrs){

            // Nachrichten Objekt zum Senden an den Chat erzeugen
            function createMessage(){

                var message = {
                    poster: User.name,
                    value: scope.message,
                    timestamp: tookit.getTimestamp()
                };


                return message;
            }

            // Nachrichten durch Enter senden
            function postOnEnter(e){

                var message = createMessage();

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