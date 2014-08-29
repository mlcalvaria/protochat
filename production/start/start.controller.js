startModule.controller('startCtrl',function($scope,Chat,MessageService){

    $scope.messages = Chat.messages;

    $scope.addMessage = function(){

        var message = MessageService.createMessage($scope.message);

        Chat.postMessage(message);
    };

});