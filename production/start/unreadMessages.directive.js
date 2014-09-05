startModule.directive('unreadMessages',function(Chat,User,$document){

    return{
        restrict: 'A',
        link: function(scope,element,attrs) {

            var unreadMessages = 0,
                doc = angular.element(window);

            scope.title = 'Protochat';

              /*doc.bind('focus',function(){
                scope.$apply(function(){
                    unreadMessages = 0;
                    scope.title = 'Protochat';
                });
            });*/

            scope.$watch(function () {return Chat.messages;},
                function () {
                    if(!document.hasFocus() || User.hasScrolled){
                        ++unreadMessages;
                        scope.title = '(' + unreadMessages + ') Protochat';
                    } else{
                        unreadMessages = 0;
                        scope.title = 'Protochat';
                    }
                },true);

            scope.$watch(document.hasFocus(),
                function () {
                    console.log('focused');
                    if(document.hasFocus()){
                        unreadMessages = 0;
                        scope.title = 'Protochat';
                    }
                },true);

            scope.$watch(function(){return User.hasScrolled},
                function () {
                    
                    console.log('scrolled');
                    if (!User.hasScrolled){
                        unreadMessages = 0;
                        scope.title = 'Protochat';
                    }
                },true);

        }
    }

});