startModule.controller('startCtrl',function($scope,Chat,MessageService){

    $scope.messages = Chat.messages;

    $scope.addMessage = function(){

        Chat.postMessage($scope.message);

        $scope.message = '';
    };

});