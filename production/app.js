//@prepros-append global/credentials.js
//@prepros-append global/global.module.js
//@prepros-append global/toolkit.service.js
//@prepros-append global/focus.directive.js
//@prepros-append global/tooltip.vendor.js
//@prepros-append global/info.service.js
//@prepros-append global/info.directive.js
//@prepros-append global/purr.js
//@prepros-append global/404.controller.js
//@prepros-append global/user.service.js

//@prepros-append start/start.module.js
//@prepros-append start/start.controller.js
//@prepros-append start/Message.service.js
//@prepros-append start/Chat.service.js
//@prepros-append start/prompt.directive.js
//@prepros-append start/historyScroll.directive.js
//@prepros-append start/pushMenu.directive.js


var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'global',
    'start',
    'purr',
    'firebase'
]);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/', {templateUrl: './partials/start/start.html',controller:'startCtrl',resolve:{

            userdata: function($q,User){

                if(User.getName()){
                    return;
                }
                else{
                    return User.promptForName();
                }

            },

            data: function(Chat){
                return Chat.loadMessages();
            }
        }})

        .when('/404', {templateUrl: './partials/global/404.html',controller:'404Ctrl'})

        .otherwise({redirectTo: '/404'});
}]);





