startModule.factory('MessageService',function(User,toolkit){

    // Nachrichten Objekt zum Senden an den Chat erzeugen
    function createMessage(message){
console.dir(User);debugger;
        var message = {
            poster: User.getName(),
            value: message,
            timestamp: toolkit.getTimestamp()
        };


        return message;
    }

    return{
        createMessage: createMessage
    }


});