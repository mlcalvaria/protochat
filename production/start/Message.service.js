startModule.factory('MessageService',function($sce,User,toolkit){

    // Nachrichten Objekt zum Senden an den Chat erzeugen
    function createMessage(message){

        var messageObject = {
            poster: message.poster || User.getName(),
            value: message.value || message,
            timestamp: toolkit.getTime()
        };

        return messageObject;
    }

    function parseMessage(message){

        var parsedMessage;

        wrapUrl(message);

        return message;

    }

    function wrapUrl(message){

        var index = message.value.indexOf('http');

        if(index != -1){

            var endIndex = message.value.indexOf(' ',index) == -1 ? message.value.length : message.value.indexOf(' ',index);

            var link = '<a href="' + message.value.substring(index,endIndex) + '">' + message.value.substring(index,endIndex) +  '</a>';

            message.value = message.value.replace(message.value.substring(index,endIndex),link);

        }

    }

    return{
        parseMessage: parseMessage,
        createMessage: createMessage
    }

});