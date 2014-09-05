startModule.directive('pushMenu',function(User,purr,Bot){
       return{
        
        restrict: 'E',
        scope: {},
        templateUrl: "partials/pushMenu/pushMenu.html",
        link: function (scope, element) {

            scope.newUsername = User.getName();

            scope.open = false;

            /**
             * Wir bilden ein jQLite Element aus dem Wurzelelement um unser Nav-Element zu finden
             *
             * @see https://docs.angularjs.org/api/ng/function/angular.element
             */
            var el = angular.element(element);

            var nav = element.find('nav')[0];

            scope.toggleMenu = function(){
                scope.open = !scope.open;
            };

            scope.setUsername = function(e){

                var oldName = User.getName();

                if(e.keyCode == 13){
                    User.setName(scope.newUsername);
                    Bot.postMessage(oldName + "'s neuer Nutzername: " + scope.newUsername);
                    purr.success("Neuer Nutzername: " + scope.newUsername);
                }

            };

            var x = element.find('nav');

            x.bind('keydown',function(e){
                console.log(e.keyCode);
                if(e.keyCode == 27){
                    scope.$apply(function () {
                        scope.toggleMenu();
                    });
                }
            });

        }
        
        
    }
    
    
});