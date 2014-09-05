startModule.directive('unreadMessages',function(Chat,$document){

    return{
        restrict: 'A',
        link: function(scope,element,attrs) {

            var doc = angular.element(window);

            scope.title = 'Protochat';

            doc.bind('focus',function(){
                scope.$apply(function(){
                    Chat.unreadMessages = 0;
                    scope.title = 'Protochat';
                });
            });

            scope.$watch(function () {
                return Chat.unreadMessages;
            }, function () {
                if(Chat.unreadMessages){
                    scope.title = '(' + Chat.unreadMessages + ') Protochat';
                } else{
                    scope.title = 'Protochat'
                }
            });

        }
    }

});