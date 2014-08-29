startModule.factory('MessageService',function(User,toolkit){

    // Nachrichten Objekt zum Senden an den Chat erzeugen
    function createMessage(message){

        var message = {
            poster: User.getName(),
            value: message,
            timestamp: toolkit.getTime()
        };


        return message;
    }

    return{
        createMessage: createMessage
    }


});