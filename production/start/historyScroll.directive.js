startModule.directive('historyScroll',function($timeout,Chat,User){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){

            // Wird benutzt um ein automatisches Scrollen zu verhindern wenn manuell nach oben gescrollt wurde

            element.bind('scroll',function(){

                // Aus irgendeinem Grund bleibt bei der Subtraktion immer 1px übrig, daher die Prüfung auf <5
                // Todo: Herausfinden wieso das zum Geier so ist

                if((element[0].scrollHeight - element[0].scrollTop) - element[0].clientHeight < 5){
                    scope.$apply(function(){
                        User.hasScrolled = false;
                    });
                } else{
                    scope.$apply(function(){
                        User.hasScrolled = true;
                    });
                }

            });

            /**
             * Ein $watch auf `messages` würde an dieser Stelle nicht funktionieren da mehrzeilige Nachrichten durch
             * das Angular-Binding nicht sofort als solche erkannt werden.
             *
             * Ein $watch auf die Höhe des Elementes funktioniert da diese sich aktualsiert sobald die eigentliche Nachricht gebunden wird
             */
            scope.$watch(function(){return element[0].scrollHeight;},function(){
                    if(!User.hasScrolled){
                        element[0].scrollTop = element[0].scrollHeight;
                    }
            },true);
        }
    }

});