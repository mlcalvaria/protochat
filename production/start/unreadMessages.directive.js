startModule.directive('unreadMessages',function(Chat,User){

    return{
        restrict: 'A',
        link: function(scope,element,attrs) {

            var unreadMessages = 0,
                doc = angular.element(window),
                isFocused;

            scope.title = 'Protochat';

            doc.bind('focus', function () {
                isFocused = true
            });

            doc.bind('blur', function () {
                isFocused = false
            });

            scope.$watch(function () {return Chat.messages;},
                function () {
                    if(!document.hasFocus() || User.hasScrolled){
                        ++unreadMessages;
                        scope.title = '(' + unreadMessages + ') Protochat';
                    }
                },true);

            scope.$watch(function(){return isFocused},
                function () {
                    if(document.hasFocus() && !User.hasScrolled){
                        unreadMessages = 0;
                        scope.title = 'Protochat';
                    }
                },true);

            scope.$watch(function(){return User.hasScrolled},
                function () {
                    if (!User.hasScrolled){
                        unreadMessages = 0;
                        scope.title = 'Protochat';
                    }
                },true);

        }
    }

});