startModule.directive('pushMenu',function(User){
       return{
        
        restrict: 'E',
        scope: {},
        templateUrl: "partials/pushMenu/pushMenu.html",
        link: function (scope, element) {


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

            scope.name = function(){
                return User.getName();
            };

        }
        
        
    }
    
    
});