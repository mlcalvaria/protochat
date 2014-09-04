botModule.service('Bot',function(Chat){

    var iRobot = this;

    this.name = 'Protobot';

    this.postMessage = function(content){
        Chat.postMessage({
            value: content,
            poster: iRobot.name
        });
    };

});