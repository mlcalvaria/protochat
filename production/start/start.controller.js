startModule.controller('startCtrl',function($scope,Chat){

    $scope.messages = Chat.messages;

    $scope.addMessage = function(msg){
        Chat.postMessage(msg);
    };

});