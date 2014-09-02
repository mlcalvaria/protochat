startModule.directive('pushMenu',function(){
       return{
        
        restrict: 'E',
        scope: {},
        templateUrl: "partials/pushMenu/pushMenu.html",
        link: function (scope, element) {

            scope.toggleMenu = function(){
                var body = angular.element('body');
                classie.toggle(body, 'cbp-spmenu-push-toleft');
                classie.toggle(element, 'cbp-spmenu-open');
            };
        }
        
        
    }
    
    
});